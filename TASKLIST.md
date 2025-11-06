# Tasklist — Exécution structurée du plan

Priorisation mobile-first, sécurité et intégrations Mobile Money. Chaque tâche inclut livrable, critères d’acceptation et dépendances.

---

## 0. Préparation & Fondations
- [ ] Mettre en place CI/CD (Dev, Staging, Prod) avec tests et lint
  - Done when: pipelines déclenchent build, tests, scan sécurité, déploiement sur envs
- [ ] Observabilité de base (logs JSON, métriques, traces)
  - Done when: tableaux de bord et alertes SLO actifs
- [ ] AuthN/AuthZ: OAuth2/JWT, RBAC (user, admin, modérateur, auditeur)
  - Done when: endpoints protégés, tests d’accès passants

## 1. Identité & Conformité (EF-101/102/103, ENF-201)
- [ ] Formulaire d’inscription mobile-first avec case d’adhésion valeurs chrétiennes (obligatoire)
  - Done when: création compte impossible sans case cochée
- [ ] Rule Engine KYC/AML par pays (Sénégal V1)
  - Done when: exigences dynamiques (CNI + preuve d’adresse) appliquées, statut KYC persistant
- [ ] Upload bas débit avec reprise + compression côté client
  - Done when: documents < 2MB, reprise en cas de coupure 2G/3G
- [ ] MFA OTP via numéro Mobile Money/SIM pour actions critiques
  - Done when: OTP requis pour dépôt/retrait; vérification coté serveur

## 2. Paiements & Mobile Money (EF-201/202/203)
- [ ] Abstraction fournisseur (Orange/Moov) + webhooks callbacks
  - Done when: dépôt/retrait simulés en sandbox, statuts gérés (pending/success/failed)
- [ ] File d’attente asynchrone + réconciliation
  - Done when: divergences corrigées automatiquement; idempotence assurée
- [ ] Paiements transfrontaliers (PAPSS) — design & conformité
  - Done when: parcours et contrôles documentés; feature flag prête
- [ ] Journal immuable des transactions
  - Done when: chaque événement signé/hashé, consultable et filtrable

## 3. Tontine Digitale (EF-302/303)
- [ ] Modèle de règles et création de tontine
  - Done when: règles enregistrées (montant, fréquence, pénalités)
- [ ] Algorithme de rotation déterministe et auditable
  - Done when: ordre stable reproductible, export JSON signé
- [ ] Automatisation cotisations, rappels, pénalités
  - Done when: jobs planifiés, notifications, calculs de pénalités validés

## 4. Crowdfunding & Dons (EF-401/402/403)
- [ ] Workflow soumission → modération → publication
  - Done when: admin valide/rejette, journal d’audit mis à jour
- [ ] Gestion des contreparties + médias optimisés (3:2, 348x232 min)
  - Done when: images compressées ≤ 200KB, ratio respecté
- [ ] Optimisation VMT (suggestions, montants, messages)
  - Done when: A/B test prêt, suivi analytics des paniers

## 5. UX Mobile-First (ENF-301/302)
- [ ] Menu rapide style USSD pour actions critiques
  - Done when: dépôt/retrait en 2–3 pressions max
- [ ] Optimisations réseau lent (gzip/br, lazy, skeleton)
  - Done when: p95 < 5s sur 3G pour pages critiques

## 6. Sécurité, Éthique & Gouvernance (ENF-101/102)
- [ ] Chiffrement au repos et en transit; gestion des clés (KMS)
  - Done when: secrets en vault, rotation documentée
- [ ] Politique de modération basée sur Charte Éthique
  - Done when: signalement, signalers de confiance, workflow établi
- [ ] Privacy & conformité (consentement, droits RGPD/locaux)
  - Done when: portails d’accès/effacement, registres de traitement

## 7. Qualité & Résilience
- [ ] Tests charge x10, chaos réseau (latence/échec APIs MM)
  - Done when: TRxR ≥ 98.5%, confirmations < 5s (ack asynchrone)
- [ ] Backups, restauration, DRP
  - Done when: RPO/RTO définis et testés

## 8. Administration & Audit
- [ ] Console admin: utilisateurs, tontines, projets, transactions
  - Done when: filtres, exports, permissions respectées
- [ ] Portail auditeur: recherche et export du journal immuable
  - Done when: export signé, traçabilité complète

## 9. Lancements & Mesure (KPIs)
- [ ] Tableaux de bord KPIs (TRxR, latence, 30d Active Users, VMT)
  - Done when: instrumentation p95/p99, alertes, revues hebdo
- [ ] Playbooks opérationnels (incidents, réconciliation, fraudes)
  - Done when: runbooks validés, exercices réguliers
