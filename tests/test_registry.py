import os, sqlite3, pytest
from backend.app.rag.registry import KnowledgeRegistry

def test_registry_prevents_duplicate_doi(tmp_path):
    db_path = str(tmp_path / "test_reg.sqlite")
    reg = KnowledgeRegistry(db_path)
    reg.init_db()
    
    ok1 = reg.register_module(
        module_id="1499",
        title="Optimal Facility Layout using Genetic Algorithm",
        doi="10.1016/j.cie.2024.101",
        isbn=None,
        domain="Facilities Planning",
        topic_key="genetic_facility_layout",
        citation="Smith et al., C&IE 2024"
    )
    assert ok1 is True
    
    # Second registration with same DOI must fail
    assert reg.is_duplicate(doi="10.1016/j.cie.2024.101", title="Different Title") is True
    ok2 = reg.register_module(
        module_id="1500",
        title="Different Title",
        doi="10.1016/j.cie.2024.101",
        isbn=None,
        domain="Facilities Planning",
        topic_key="genetic_facility_layout",
        citation="Smith et al., C&IE 2024"
    )
    assert ok2 is False
