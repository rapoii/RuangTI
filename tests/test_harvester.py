import pytest
from backend.app.rag.registry import KnowledgeRegistry
from scripts.academic_harvester import filter_candidate_papers, normalize_paper_doi


def test_filter_candidate_papers_dedup_against_seen_dois():
    candidates = [
        {"doi": "10.1016/j.cie.2024.01", "title": "Facility Layout 1"},
        {"doi": "10.1016/j.cie.2024.02", "title": "Facility Layout 2"},
    ]
    seen_dois = {"10.1016/j.cie.2024.01"}
    filtered = filter_candidate_papers(candidates, seen_dois=seen_dois)
    assert len(filtered) == 1
    assert filtered[0]["doi"] == "10.1016/j.cie.2024.02"


def test_filter_candidate_papers_dedup_against_knowledge_registry(tmp_path):
    db_path = str(tmp_path / "test_reg.sqlite")
    reg = KnowledgeRegistry(db_path=db_path)
    reg.init_db()
    reg.register_module(
        module_id="1500",
        title="Robust Supply Chain Optimization Under Disruption",
        doi="10.1016/j.ejor.2024.100",
        isbn=None,
        domain="Supply Chain & Logistics Engineering",
        topic_key="supply_chain_disruption",
        citation="Smith et al. (2024)"
    )

    candidates = [
        {"doi": "10.1016/j.ejor.2024.100", "title": "Brand New Title With Same DOI"},
        {"doi": "10.1016/j.ejor.2024.200", "title": "1500 - Robust Supply Chain Optimization Under Disruption!"},
        {"doi": "10.1016/j.ejor.2024.300", "title": "Unique Fresh Topic in Scheduling and Lot Sizing"},
    ]

    filtered = filter_candidate_papers(candidates, registry=reg)
    assert len(filtered) == 1
    assert filtered[0]["doi"] == "10.1016/j.ejor.2024.300"


def test_filter_candidate_papers_dedup_batch_internal_duplicates():
    candidates = [
        {"doi": "10.1016/j.cie.2024.01", "title": "Multi-Echelon Inventory Optimization"},
        {"doi": "https://doi.org/10.1016/j.cie.2024.01", "title": "Different Title Same URL Formatted DOI"},
        {"doi": "10.1016/j.cie.2024.05", "title": "Facility Layout Genetic Algorithm"},
        {"doi": "10.1016/j.cie.2024.06", "title": "Facility Layout Genetic Algorithm"},  # Duplicate title
        {"doi": "10.1016/j.cie.2024.07", "title": "Clean Distinct Study on Ergonomics"},
    ]

    filtered = filter_candidate_papers(candidates)
    assert len(filtered) == 3
    assert [p["doi"] for p in filtered] == [
        "10.1016/j.cie.2024.01",
        "10.1016/j.cie.2024.05",
        "10.1016/j.cie.2024.07"
    ]


def test_normalize_paper_doi():
    assert normalize_paper_doi("https://doi.org/10.1016/j.cie.2024.01") == "10.1016/j.cie.2024.01"
    assert normalize_paper_doi("http://dx.doi.org/10.1016/j.cie.2024.01") == "10.1016/j.cie.2024.01"
    assert normalize_paper_doi("  10.1016/J.CIE.2024.01  ") == "10.1016/j.cie.2024.01"
    assert normalize_paper_doi("") == ""
    assert normalize_paper_doi(None) == ""
