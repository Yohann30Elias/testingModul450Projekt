# Use Cases für die BizTrips-Anwendung

Dieses Dokument beschreibt die zentralen Anwendungsfälle (Use Cases) der BizTrips React-Anwendung. Ziel ist es, die Funktionen und Interaktionen zwischen Benutzern und dem System strukturiert darzustellen.

---

## 1. Trip zur Wunschliste hinzufügen

### Ziel:

Als Benutzer möchte ich Trips zur Wunschliste hinzufügen, um diese für eine spätere Planung zu speichern.

### Akteure:

- Benutzer

### Ablauf:

1. Der Benutzer klickt auf die Schaltfläche „Add to Wishlist“ für einen spezifischen Trip in der Liste.
2. Das System fügt den ausgewählten Trip der Wunschliste hinzu.

### Vorbedingungen:

- Es sind Trips in der Liste sichtbar.

### Nachbedingungen:

- Der ausgewählte Trip wird in der Wunschliste angezeigt.

---

## 2. Trip aus der Wunschliste entfernen

### Ziel:

Als Benutzer möchte ich Trips aus der Wunschliste entfernen, wenn diese nicht mehr relevant sind.

### Akteure:

- Benutzer

### Ablauf:

1. Der Benutzer klickt auf die Schaltfläche „Delete Item“ für einen spezifischen Trip in der Wunschliste.
2. Das System entfernt den Trip aus der Wunschliste.

### Vorbedingungen:

- Es befinden sich Trips in der Wunschliste.

### Nachbedingungen:

- Der ausgewählte Trip wird nicht mehr in der Wunschliste angezeigt.

---

## 3. Wunschliste leeren

### Ziel:

Als Benutzer möchte ich alle Trips aus der Wunschliste entfernen, um sie komplett zurückzusetzen.

### Akteure:

- Benutzer

### Ablauf:

1. Der Benutzer klickt auf die Schaltfläche „Empty Wishlist“.
2. Das System entfernt alle Trips aus der Wunschliste.

### Vorbedingungen:

- Es befinden sich Trips in der Wunschliste.

### Nachbedingungen:

- Die Wunschliste ist leer.

---

## 4. Trips nach Monat filtern

### Ziel:

Als Benutzer möchte ich Trips nach einem bestimmten Monat filtern, um relevante Optionen anzuzeigen.

### Akteure:

- Benutzer

### Ablauf:

1. Der Benutzer wählt einen Monat im Filter-Dropdown-Menü aus.
2. Das System zeigt nur Trips an, die in diesem Monat stattfinden.

### Vorbedingungen:

- Es befinden sich Trips in der Liste.

### Nachbedingungen:

- Die Trips werden entsprechend dem ausgewählten Monat gefiltert angezeigt.

---

## 5. Fehler bei API-Anfragen behandeln

### Ziel:

Das System soll Benutzer über Fehler informieren, wenn API-Anfragen fehlschlagen.

### Akteure:

- Benutzer
- System

### Ablauf:

1. Eine API-Anfrage (z. B. zum Laden der Trips) schlägt fehl.
2. Das System zeigt eine Fehlermeldung wie „Error: API is down“ an.

### Vorbedingungen:

- Das System versucht, Daten von der API zu laden.

### Nachbedingungen:

- Der Benutzer wird über den Fehler informiert.

---

## 6. Produkte und Warenkorb-Daten abrufen

### Ziel:

Das System soll Produkte und Warenkorb-Daten von einem Backend-Server laden.

### Akteure:

- System

### Ablauf:

1. Das System sendet eine Anfrage an die API-Endpunkte `/products` oder `/cart/items`.
2. Die API antwortet mit den entsprechenden Daten.

### Vorbedingungen:

- Der Backend-Server ist erreichbar.

### Nachbedingungen:

- Die abgerufenen Daten werden dem Benutzer in der Benutzeroberfläche angezeigt.

---

Diese Use Cases bilden die Grundlage für die Hauptfunktionen der Anwendung und gewährleisten eine strukturierte Nutzung sowie ein positives Benutzererlebnis.
