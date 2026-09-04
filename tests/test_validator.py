import pytest
from backend.app.rag.validator import validate_module_content


def build_valid_module_content(extra_text: str = "") -> str:
    base = """# 1499 — Optimal Facility Layout using Genetic Algorithm

## 1. Pendahuluan
Fasilitas manufaktur modern membutuhkan tata letak optimal guna meminimalkan biaya perpindahan material dan meningkatkan efisiensi aliran proses. Permasalahan tata letak fasilitas (Facility Layout Problem/FLP) merupakan salah satu pilar utama dalam teknik industri yang menuntut pendekatan optimasi matematis dan heuristik modern.

## 2. Landasan Teori
Perumusan matematis dari Quadratic Assignment Problem (QAP) dapat diekspresikan sebagai berikut:
$$min \\sum_{i=1}^n \\sum_{j=1}^n f_{ij} d_{p(i)p(j)}$$
Di mana $f_{ij}$ merepresentasikan frekuensi aliran material antara departemen $i$ dan $j$, serta $d_{p(i)p(j)}$ adalah jarak rectilinear antar lokasi penempatan departemen. Variabel keputusan biner $x_{ik}$ memastikan setiap departemen ditempatkan tepat pada satu lokasi:
$$\\sum_{k=1}^n x_{ik} = 1, \\quad \\forall i \\in \\{1, \\dots, n\\}$$

## 3. Algoritma
Algoritma Genetika diimplementasikan melalui langkah-langkah terstruktur:
1. Inisialisasi populasi kromosom permutasi acak berukuran $N=100$.
2. Evaluasi fungsi kelayakan fitness $F = 1 / (1 + TC)$.
3. Seleksi turnamen dengan probabilitas $P_{sel} = 0.85$.
4. Crossover Partially Mapped Crossover (PMX) dengan tingkat probabilitas $P_c = 0.90$.
5. Mutasi swap atau inversi dengan laju mutasi adaptif $P_m = 0.05$.
6. Kriteria henti tercapai setelah 500 generasi berturut-turut tanpa perbaikan nilai fitness.

## 4. Studi Kasus
Studi kasus dilakukan pada pabrik perakitan komponen otomotif dengan 12 departemen fungsional. Data From-To Chart mencatat perpindahan pallet harian hingga 450 trip/hari. Implementasi algoritma genetika menghasilkan penurunan total momen perpindahan material sebesar 28.4% dibandingkan tata letak eksisting. Jarak tempuh operator berkurang dari 14.2 km/shift menjadi 10.1 km/shift, menghasilkan efisiensi biaya logistik internal sebesar Rp 145.000.000 per tahun.

## 5. Evaluasi Kritis
Meskipun algoritma genetika memberikan solusi sub-optimal yang sangat memadai dalam waktu komputasi 42 detik, terdapat kelemahan pada sensitivitas parameter operator crossover dan mutasi yang membutuhkan kalibrasi eksperimen berulang. Selain itu, asumsi penempatan departemen persegi empat sempurna tidak selalu realistis jika diterapkan pada konfigurasi gedung dengan batasan tiang struktural atau lintasan derek overhead.

## 6. Ringkasan dan Kesimpulan
Penggunaan algoritma genetika dalam penyelesaian Quadratic Assignment Problem pada fasilitas manufaktur terbukti mampu menghasilkan reduksi biaya material handling yang signifikan. Integrasi pemodelan matematis dengan algoritma metaheuristik menyediakan kerangka kerja analitis yang handal bagi perancang tata letak industri modern.
"""
    # Ensure length is well above 3000 chars if requested
    filler = "\n\n" + ("Pembahasan tambahan mengenai analisis sensitivitas parameter algoritma genetika dan konvergensi solusi. " * 30)
    return base + filler + extra_text


def test_validator_accepts_valid_complete_content():
    content = build_valid_module_content()
    assert len(content) >= 3000
    valid, errors = validate_module_content(content)
    assert valid is True, f"Expected valid content but got errors: {errors}"
    assert errors == []


def test_validator_rejects_content_under_3000_chars():
    short_content = """# 1499 — Short Title
## 1. Pendahuluan
Pendahuluan singkat.
## 2. Landasan Teori
Teori singkat $$x=1$$.
## 3. Algoritma
Algoritma singkat.
## 4. Studi Kasus
Studi kasus singkat.
## 5. Evaluasi Kritis
Evaluasi singkat.
## 6. Ringkasan
Ringkasan singkat.
"""
    assert len(short_content) < 3000
    valid, errors = validate_module_content(short_content)
    assert valid is False
    assert any("too short" in e.lower() or "minimum 3000" in e.lower() for e in errors)


def test_validator_rejects_unclosed_display_latex():
    valid_base = build_valid_module_content()
    # Inject an unclosed $$ delimiter
    broken_content = valid_base + "\n$$ unclosed display math without closure"
    # Ensure content has odd number of $$
    assert broken_content.count("$$") % 2 != 0
    valid, errors = validate_module_content(broken_content)
    assert valid is False
    assert any("$$" in e or "display math" in e.lower() or "latex" in e.lower() for e in errors)


def test_validator_rejects_unclosed_inline_latex():
    valid_base = build_valid_module_content()
    # Inject an unclosed $ delimiter (without introducing double $$)
    broken_content = valid_base + "\nCatatan tambahan dengan simbol variabel yang tidak tertutup $x_i dan berlanjut."
    # Ensure odd number of single $
    without_display = broken_content.replace("$$", "")
    assert without_display.count("$") % 2 != 0
    valid, errors = validate_module_content(broken_content)
    assert valid is False
    assert any("inline math" in e.lower() or "$" in e or "latex" in e.lower() for e in errors)


@pytest.mark.parametrize("missing_section_pattern,section_to_remove", [
    ("1. Pendahuluan", "## 1. Pendahuluan"),
    ("2. Landasan Teori", "## 2. Landasan Teori"),
    ("3. Algoritma", "## 3. Algoritma"),
    ("4. Studi Kasus", "## 4. Studi Kasus"),
    ("5. Evaluasi Kritis", "## 5. Evaluasi Kritis"),
    ("6. Ringkasan", "## 6. Ringkasan"),
])
def test_validator_rejects_missing_mandatory_sections(missing_section_pattern, section_to_remove):
    valid_base = build_valid_module_content()
    # Replace the section header with something else
    broken_content = valid_base.replace(section_to_remove, "## Bagian Pengganti")
    valid, errors = validate_module_content(broken_content)
    assert valid is False
    assert any("missing required section" in e.lower() or missing_section_pattern.lower() in e.lower() for e in errors)


def test_validator_accepts_kesimpulan_as_section_6():
    valid_base = build_valid_module_content()
    content_with_kesimpulan = valid_base.replace("## 6. Ringkasan dan Kesimpulan", "## 6. Kesimpulan dan Referensi")
    valid, errors = validate_module_content(content_with_kesimpulan)
    assert valid is True, f"Expected valid content with '6. Kesimpulan' but got errors: {errors}"
    assert errors == []


def test_validator_rejects_incomplete_sentence_ending():
    valid_base = build_valid_module_content()
    # Strip valid ending punctuation
    broken_content = valid_base.rstrip().rstrip(".!?)],*\"") + " kalimat yang terputus di tengah jalan tanpa tanda baca"
    valid, errors = validate_module_content(broken_content)
    assert valid is False
    assert any("trailing sentence" in e.lower() or "incomplete" in e.lower() for e in errors)
