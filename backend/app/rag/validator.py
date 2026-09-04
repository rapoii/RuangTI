import re
from typing import Tuple, List

REQUIRED_SECTIONS = [
    r'##\s+1\.\s+Pendahuluan',
    r'##\s+2\.\s+Landasan Teori',
    r'##\s+3\.\s+Algoritma',
    r'##\s+4\.\s+Studi Kasus',
    r'##\s+5\.\s+Evaluasi Kritis',
    r'##\s+6\.\s+Ringkasan|##\s+6\.\s+Kesimpulan'
]


def validate_module_content(content: str) -> Tuple[bool, List[str]]:
    """
    Deterministically validates the quality, formatting, completeness, and structure
    of an Industrial Engineering knowledge module.

    Rules checked:
    1. Content length: must be at least 3000 characters.
    2. Display math delimiters ($$): count must be even (no unclosed display math).
    3. Inline math delimiters ($): count outside display math must be even.
    4. Mandatory sections: Must contain all 6 required sections:
       - 1. Pendahuluan
       - 2. Landasan Teori
       - 3. Algoritma
       - 4. Studi Kasus
       - 5. Evaluasi Kritis
       - 6. Ringkasan or Kesimpulan
    5. Trailing sentence completion: last non-whitespace character must end with proper punctuation.
    """
    errors: List[str] = []

    trimmed = content.strip() if content else ""

    # 1. Check length
    if len(trimmed) < 3000:
        errors.append(f"Content too short: {len(trimmed)} chars (minimum 3000)")

    # 2. Check display LaTeX delimiters ($$)
    if content.count('$$') % 2 != 0:
        errors.append("Unclosed display math ($$)")

    # 3. Check inline LaTeX delimiters ($)
    without_display = content.replace('$$', '')
    if without_display.count('$') % 2 != 0:
        errors.append("Unclosed inline math ($)")

    # 4. Check required sections
    for sec_pattern in REQUIRED_SECTIONS:
        if not re.search(sec_pattern, content, re.IGNORECASE):
            errors.append(f"Missing required section matching pattern: {sec_pattern}")

    # 5. Check sentence termination
    last_char = trimmed[-1] if trimmed else ''
    if last_char not in ('.', '!', '?', ']', ')', '"', '*'):
        errors.append(f"Incomplete trailing sentence, ends with: '{last_char}'")

    return (len(errors) == 0, errors)
