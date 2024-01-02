"use strict";(self.webpackChunkcms_backend=self.webpackChunkcms_backend||[]).push([[3274],{59710:(o,e,t)=>{t.r(e),t.d(e,{configurations:()=>n,default:()=>r,from:()=>i});const n="Konfigurationen",i="von",r={"attribute.boolean":"Boolean","attribute.boolean.description":"Ja oder nein, 1 oder 0, wahr oder falsch","attribute.component":"Komponente","attribute.component.description":"Gruppierung an Feldern, die wiederholt und wiederbenutzt werden kann","attribute.date":"Datum","attribute.date.description":"Eine Datums-Auswahl mit Stunden, Minuten und Sekunden","attribute.datetime":"Datum mit Uhrzeit","attribute.dynamiczone":"Dynamische Zone","attribute.dynamiczone.description":"Beliebige Komponenten beim Bearbeiten des Inhalts w\xE4hlen","attribute.email":"E-Mail","attribute.email.description":"E-Mail-Feld mit Validierung","attribute.enumeration":"Enumeration","attribute.enumeration.description":"Aufz\xE4hlung an Auswahlm\xF6glichkeiten, von denen eine gew\xE4hlt werden muss","attribute.json":"JSON","attribute.json.description":"Daten im JSON-Format","attribute.media":"Medien","attribute.media.description":"Dateien wie Bilder, Videos, etc","attribute.null":" ","attribute.number":"Zahl","attribute.number.description":"Zahlen (ganzzahlig, Gleitkommazahl, dezimal)","attribute.password":"Passwort","attribute.password.description":"Passwort-Feld mit Verschl\xFCsselung","attribute.relation":"Beziehung","attribute.relation.description":"Beziehung mit einem anderen Eintrag","attribute.richtext":"Formatierter Text","attribute.richtext.description":"Ein Text-Editor mit Formatierungsoptionen","attribute.text":"Text","attribute.text.description":"Ein- oder mehrzeiliger Text wie Titel oder Beschreibungen","attribute.time":"Uhrzeit","attribute.timestamp":"Zeitstempel","attribute.uid":"UID","attribute.uid.description":"Einzigartiger Identifier","button.attributes.add.another":"Weiteres Feld hinzuf\xFCgen","button.component.add":"Komponente hinzuf\xFCgen","button.component.create":"Neue Komponente erstellen","button.model.create":"Neue Sammlung erstellen","button.single-types.create":"Neuen Einzel-Eintrag erstellen","component.repeatable":"(wiederholbar)","components.SelectComponents.displayed-value":"{number, plural, =0 {# Komponenten} one {# Komponente} other {# Komponenten}} ausgew\xE4hlt","components.componentSelect.no-component-available":"Du hast bereits alle Komponenten hinzugef\xFCgt","components.componentSelect.no-component-available.with-search":"Es gibt keine Komponenten, die diesem Begriff entsprechen","components.componentSelect.value-component":"{number} Komponente ausgew\xE4hlt (Tippen um nach Komponente zu suchen)","components.componentSelect.value-components":"{number} Komponenten ausgew\xE4hlt",configurations:n,"contentType.apiId-plural.description":"API-ID im Plural","contentType.apiId-plural.label":"Plural API ID","contentType.apiId-singular.description":"Die UID wird verwendet, um API-Routen und Datenbank-Tabellen/-Sammlungen zu erstellen","contentType.apiId-singular.label":"Singular API ID","contentType.collectionName.description":"N\xFCtzlich wenn sich der Name der Sammlung und der Tabellenname unterscheiden","contentType.collectionName.label":"Name der Sammlung","contentType.displayName.label":"Anzeigename","contentType.draftAndPublish.description":"Lege einen Entwurf des Eintrags an bevor er ver\xF6ffentlicht wird","contentType.draftAndPublish.label":"Entwurf/Ver\xF6ffentlichen-System","contentType.kind.change.warning":"Du hast die Art eines Inhaltstyps ge\xE4ndert: API wird resettet (Routen, Controller und Services werden \xFCberschrieben).","error.attributeName.reserved-name":"Dieser Name kann nicht f\xFCr Attribute genutzt werden, da er andere Funktionalit\xE4ten beeintr\xE4chtigen w\xFCrde","error.contentType.pluralName-used":"Dieser Wert kann nicht gleich sein wie der Singular-Wert","error.contentType.singularName-used":"Dieser Wert kann nicht gleich sein wie der Plural-Wert","error.contentTypeName.reserved-name":"Dieser Name kann nicht genutzt werden, da er andere Funktionalit\xE4ten beeintr\xE4chtigen w\xFCrde","error.validation.enum-duplicate":"Doppelte Werte sind nicht erlaubt","error.validation.enum-empty-string":"Leere Werte sind nicht erlaubt","error.validation.enum-number":"Werte k\xF6nnen nicht mit einer Zahl beginnen","error.validation.minSupMax":"Wert kann nicht h\xF6her sein","error.validation.positive":"Muss eine positive Zahl sein","error.validation.regex":"Regex-Pattern ist ung\xFCltig","error.validation.relation.targetAttribute-taken":"Dieser Name existiert bereits im Ziel-Typ","form.attribute.component.option.add":"Komponente hinzuf\xFCgen","form.attribute.component.option.create":"Neue Komponente erstellen","form.attribute.component.option.create.description":"Eine Komponente ist \xFCberall verf\xFCgbar und wird unter Inhaltstypen und anderen Komponenten geteilt.","form.attribute.component.option.repeatable":"Wiederholbare Komponenten","form.attribute.component.option.repeatable.description":"N\xFCtzlich f\xFCr mehrere Instanzen (Array) an Zutaten, Meta-Tags, etc...","form.attribute.component.option.reuse-existing":"Bereits existierende Komponente nutzen","form.attribute.component.option.reuse-existing.description":"Eine bereits erstellte Komponente benutzen, um Daten \xFCber Inhaltstypen hinweg konsistent zu halten.","form.attribute.component.option.single":"Einzelne Komponente","form.attribute.component.option.single.description":"N\xFCtzlich um Felder wie volle Addresse, Hauptinformationen, etc. zu grupppieren","form.attribute.item.customColumnName":"Eigener Spaltenname","form.attribute.item.customColumnName.description":"Dies ist n\xFCtzlich, um Spalten in der Datenbank f\xFCr Antworten der API umzubenennen","form.attribute.item.date.type.date":"Datum (Bsp: 01.01.{currentYear})","form.attribute.item.date.type.datetime":"Datum & Uhrzeit (Bsp: 01.01.{currentYear} 00:00)","form.attribute.item.date.type.time":"Uhrzeit (Bsp: 00:00)","form.attribute.item.defineRelation.fieldName":"Feldname","form.attribute.item.enumeration.graphql":"Namens\xFCberschreibung f\xFCr GraphQL","form.attribute.item.enumeration.graphql.description":"Erm\xF6glicht, den standardm\xE4\xDFig generierten Namen f\xFCr GraphQL zu \xFCberschreiben","form.attribute.item.enumeration.placeholder":`Bsp:
Morgen
Mittag
Abend`,"form.attribute.item.enumeration.rules":"Werte (einer pro Zeile)","form.attribute.item.maximum":"Maximalwert","form.attribute.item.maximumLength":"Maximall\xE4nge","form.attribute.item.minimum":"Mindestwert","form.attribute.item.minimumLength":"Mindestl\xE4nge","form.attribute.item.number.type":"Zahlenformat","form.attribute.item.number.type.biginteger":"gro\xDFe Ganzzahl (ex: 123456789)","form.attribute.item.number.type.decimal":"dezimal (z.B.: 2.22)","form.attribute.item.number.type.float":"Gleitkommazahl (z.B.: 3.33333333)","form.attribute.item.number.type.integer":"ganzzahlig (z.B.: 10)","form.attribute.item.privateField":"Privates Feld","form.attribute.item.privateField.description":"Dieses Feld wird nicht in API-Abfragen angezeigt","form.attribute.item.requiredField":"Ben\xF6tigtes Feld","form.attribute.item.requiredField.description":"Du wirst keinen Eintrag anlegen k\xF6nnen, wenn dieses Feld leer ist","form.attribute.item.text.regex":"RegExp-Pattern","form.attribute.item.text.regex.description":"Der Text der Regular Expression","form.attribute.item.uniqueField":"Einzigartiges Feld","form.attribute.item.uniqueField.description":"Du wirst keinen Eintrag anlegen k\xF6nnen, wenn es bereits einen Eintrag mit identischem Inhalt gibt","form.attribute.media.allowed-types":"W\xE4hle erlaubte Arten von Medien","form.attribute.media.allowed-types.option-files":"Dateien","form.attribute.media.allowed-types.option-images":"Bilder","form.attribute.media.allowed-types.option-videos":"Videos","form.attribute.media.option.multiple":"Mehrere Medien","form.attribute.media.option.multiple.description":"N\xFCtzlich f\xFCr Slider, Galerien oder Downloads von mehreren Dateien","form.attribute.media.option.single":"Einzelne Medien-Datei","form.attribute.media.option.single.description":"N\xFCtzlich f\xFCr Profilbilder oder Cover-Bilder","form.attribute.settings.default":"Standardwert","form.attribute.text.option.long-text":"Mehrzeiliger Text","form.attribute.text.option.long-text.description":"N\xFCtzlich f\xFCr Beschreibungen, Biographien. Exakte Suche ist deaktiviert","form.attribute.text.option.short-text":"Einzeiliger Text","form.attribute.text.option.short-text.description":"N\xFCtzlich f\xFCr Titel, Namen, Links (URL). Erm\xF6glicht exakte Suche.","form.button.add-components-to-dynamiczone":"Komponenten zur Zone hinzuf\xFCgen","form.button.add-field":"Weiteres Feld hinzuf\xFCgen","form.button.add-first-field-to-created-component":"Erstes Feld zur Komponente hinzuf\xFCgen","form.button.add.field.to.collectionType":"Weiteres Feld zur Sammlung hinzuf\xFCgen","form.button.add.field.to.component":"Weiteres Feld zur Komponente hinzuf\xFCgen","form.button.add.field.to.contentType":"Weiteres Feld zum Inhaltstyp hinzuf\xFCgen","form.button.add.field.to.singleType":"Weiteres Feld zum Einzel-Eintrag hinzuf\xFCgen","form.button.cancel":"Abbrechen","form.button.collection-type.description":"N\xFCtzlich f\xFCr mehrere Instanzen wie Artikel, Produkte, Kommentare, etc.","form.button.collection-type.name":"Inhalts-Typ","form.button.configure-component":"Komponente konfigurieren","form.button.configure-view":"Ansicht konfigurieren","form.button.select-component":"Komponente ausw\xE4hlen","form.button.single-type.description":"N\xFCtzlich f\xFCr einzelne Instanz wie \xDCber uns, Startseite, etc.","form.button.single-type.name":"Einzel-Eintrag",from:i,"listView.headerLayout.description":"Baue die Daten-Architektur deines Inhalts","menu.section.components.name":"Komponenten","menu.section.models.name":"Sammlungen","menu.section.single-types.name":"Einzel-Eintr\xE4ge","modalForm.attribute.form.base.name.description":"Leerzeichen sind im Name eines Attributs nicht erlaubt","modalForm.attribute.form.base.name.placeholder":"z.B. slug, seoUrl, canonicalUrl","modalForm.attribute.target-field":"Verkn\xFCpftes Feld","modalForm.attributes.select-component":"W\xE4hle eine Komponente","modalForm.attributes.select-components":"W\xE4hle die Komponenten","modalForm.collectionType.header-create":"Erstelle einen Inhalts-Typ","modalForm.component.header-create":"Erstelle eine Komponente","modalForm.components.create-component.category.label":"W\xE4hle Kategorie oder gebe neuen Namen ein, um eine zu erstellen","modalForm.components.icon.label":"Icon","modalForm.editCategory.base.name.description":"Leerzeichen sind im Name einer Kategorie nicht erlaubt","modalForm.header-edit":"Bearbeite {name}","modalForm.header.categories":"Kategorien","modalForm.header.back":"Zur\xFCck","modalForm.singleType.header-create":"Erstelle einen Einzel-Eintrag","modalForm.sub-header.addComponentToDynamicZone":"Komponente zur dynamischen Zone hinzuf\xFCgen","modalForm.sub-header.attribute.create":"Erstelle neues {type}-Feld","modalForm.sub-header.attribute.create.step":"Neue Komponente ({step}/2)","modalForm.sub-header.attribute.edit":"Bearbeite {name}","modalForm.sub-header.chooseAttribute.collectionType":"W\xE4hle ein Feld f\xFCr die Sammlung","modalForm.sub-header.chooseAttribute.component":"W\xE4hle ein Feld f\xFCr die Komponente","modalForm.sub-header.chooseAttribute.singleType":"W\xE4hle ein Feld f\xFCr den Einzel-Eintrag","modelPage.attribute.relation-polymorphic":"Beziehung (polymorph)","modelPage.attribute.relationWith":"Beziehung mit","notification.error.dynamiczone-min.validation":"Eine dynamische Zone braucht mindestens eine Komponente, bevor sie gespeichert werden kann","notification.info.autoreaload-disable":"Das autoReload-Feature wird f\xFCr dieses Plugin ben\xF6tigt. Starte deinen Server mit `strapi develop`","notification.info.creating.notSaved":"Bitte speichere deine Arbeit bevor du einen neuen Inhaltstyp oder eine neue Komponente erstellst","plugin.description.long":"Modelliere die Datenstruktur deiner API. Lege neue Felder und Beziehungen innerhalb von einer Minute an. Erforderliche Dateien werden automatisch in deinem Projekt angelegt und aktualisiert.","plugin.description.short":"Modelliere die Datenstruktur deiner API.","plugin.name":"Content-Type Builder","popUpForm.navContainer.advanced":"Fortgeschrittene Einstellungen","popUpForm.navContainer.base":"Grundeinstellungen","popUpWarning.bodyMessage.cancel-modifications":"Bist du dir sicher, dass du alle deine \xC4nderungen abbrechen willst?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Bist du dir sicher, dass du alle deine \xC4nderungen abbrechen willst? Es wurden Komponenten erstellt oder bearbeitet...","popUpWarning.bodyMessage.category.delete":"Bist du dir sicher, dass du diese Kategorie l\xF6schen willst? Alle dazugeh\xF6rigen Komponenten werden ebenfalls gel\xF6scht.","popUpWarning.bodyMessage.component.delete":"Bist du dir sicher, dass du diese Komponente l\xF6schen willst?","popUpWarning.bodyMessage.contentType.delete":"Bist du sicher, dass du diesen Inhaltstyp l\xF6schen willst?","popUpWarning.draft-publish.button.confirm":"Ja, deaktivieren","popUpWarning.draft-publish.message":"Wenn du das Entwurf/Ver\xF6ffentlichen-System deaktivierst werden alle Entw\xFCrfe gel\xF6scht.","popUpWarning.draft-publish.second-message":"Bist du dir sicher, dass du es deaktivieren willst?","prompt.unsaved":"Bist du dir sicher, dass du diese Seite verlassen willst? Deine \xC4nderungen werden verworfen.","relation.attributeName.placeholder":"z.B.: Autor, Kategorie","relation.manyToMany":"hat und geh\xF6rt zu vielen","relation.manyToOne":"hat viele","relation.manyWay":"hat viele","relation.oneToMany":"geh\xF6rt zu vielen","relation.oneToOne":"hat und geh\xF6rt zu ein(-er/-em)","relation.oneWay":"hat ein(-e/-en)","table.button.no-fields":"Neues Feld hinzuf\xFCgen","table.content.create-first-content-type":"Erstelle deinen ersten Inhalts-Typ","table.content.no-fields.collection-type":"F\xFCge diesem Inhalts-Typ das erstes Feld hinzu","table.content.no-fields.component":"F\xFCge dieser Komponente das erstes Feld hinzu"}}}]);
