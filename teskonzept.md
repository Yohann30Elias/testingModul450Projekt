# Testkonzept für das Modul 450 Projekt

Dieses Testkonzept beschreibt die Struktur und Vorgehensweise für das Testen unseres Projekts. Ziel ist es, eine hohe Codequalität sicherzustellen und potenzielle Fehler frühzeitig zu erkennen.

---

## Testarten

### 1. Unit-Tests

Unit-Tests prüfen einzelne Funktionen oder Module isoliert. Sie sind die Grundlage unseres Testkonzepts und helfen sicherzustellen, dass jede Funktion wie erwartet funktioniert.

### 2. Integrationstests

Integrationstests überprüfen das Zusammenspiel verschiedener Module. Damit stellen wir sicher, dass die Komponenten unseres Projekts korrekt miteinander interagieren.

### 3. End-to-End-Tests

End-to-End-Tests simulieren Benutzerabläufe und testen das System als Ganzes. Sie helfen sicherzustellen, dass die wichtigsten Funktionen aus Nutzersicht fehlerfrei arbeiten.

---

## Testumgebung

Die Tests werden in einer isolierten Umgebung durchgeführt, um sicherzustellen, dass sie unabhängig von der Entwicklungsumgebung sind. Dies beinhaltet:

- **Mocking von Datenbanken**: Wir verwenden eine In-Memory-Datenbank für Tests, um reale Daten nicht zu beeinträchtigen.
- **Mocking von externen Diensten**: APIs und externe Dienste werden gemockt, um sie zu simulieren.

---

## Testprozess

### 1. Automatisierte Tests schreiben

- Für jede neue Funktionalität werden passende Tests erstellt.
- Bestehende Tests werden bei Änderungen im Code angepasst.

### 2. Tests regelmäßig ausführen

- Die Tests werden lokal während der Entwicklung ausgeführt.
- Bei jedem neuen Commit werden die Tests automatisch in der CI-Pipeline ausgeführt.

### 3. Fehler beheben

- Falls Tests fehlschlagen, werden die entsprechenden Fehler analysiert und behoben, bevor die Änderungen gemergt werden.

---

## Ziele

- **Qualitätssicherung**: Fehler frühzeitig erkennen und beheben.
- **Automatisierung**: Tests so weit wie möglich automatisieren, um den manuellen Aufwand zu reduzieren.
- **Zuverlässigkeit**: Sicherstellen, dass alle Funktionen des Projekts wie vorgesehen arbeiten.

---

Mit diesem Testkonzept schaffen wir eine robuste Grundlage für das Testen unseres Projekts und stellen sicher, dass wir unseren Qualitätsstandards gerecht werden.
