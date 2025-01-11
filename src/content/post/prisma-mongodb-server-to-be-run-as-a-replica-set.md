---
title: "Prisma & MongoDB: server to be run as a replica set"
description: 'Solution for: "Prisma needs to perform transactions, which requires your MongoDB server to be run as a replica set"'
tags: ["prisma", "mongodb", "javascript", "db", "be"]
publishDate: "16 Dec 2024"
---

## Problem

Service & controller sudah dibuat, seharusnya semua aman.
Namun ketika hit API, muncullah `Prisma needs to perform transactions, which requires your MongoDB server to be run as a replica set`.

## Root cause

Error tersebut di atas hanya terjadi pada operasi `create`, `update`, dan `delete`,
karena _Prisma_ perlu _MongoDB_ berjalan sebagai _replica set_ untuk menjalankan operasi-operasi tersebut.

## Solution

### Edit `mongodb.conf`

Pastikan `/etc/mongod.conf` mempunyai code di bawah

```yaml
replication:
  replSetName: rs0
```

### Restart MongoDB

Restart _mongod_ service setelah perubahan _config_

```bash
sudo systemctl restart mongod
```
