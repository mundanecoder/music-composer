/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5kg1cvd5nt3thge")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xv5slnpp",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zzgpe8kb",
    "name": "password",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5kg1cvd5nt3thge")

  // remove
  collection.schema.removeField("xv5slnpp")

  // remove
  collection.schema.removeField("zzgpe8kb")

  return dao.saveCollection(collection)
})
