# Plan de développement — Plateforme Tontine/ROSC & Crowdfunding dédiée aux communautés chrétiennes (Afrique Subsaharienne)

Objectif: Concevoir une plateforme mobile-first, sécurisée et résiliente, intégrée au Mobile Money, remplaçant la confiance communautaire traditionnelle par des garanties technologiques (transparence, sécurité, auditabilité), conforme aux exigences locales et internationales.

---

## 1. Périmètre & Personas

- Utilisateurs finaux (fidèles, membres de communautés, diaspora)
- Organisateurs de tontines
- Porteurs de projets (crowdfunding/dons)
- Administrateurs/modérateurs
- Auditeurs (conformité, finance, éthique)

Cas d’usage clés:
- Inscription + KYC/AML adapté au pays
- Dépôt/Retrait via Mobile Money (OTP pour actions critiques)
- Création/adhésion à une tontine avec rotation déterministe
- Soumission/validation de projets, dons avec contreparties
- Journal d’audit immuable et consultable

---

## 2. Architecture cible (macro)

- Style: Microservices (paiements, tontine, crowdfunding, identité/KYC, règles, audit, médias)
- Communication: REST/HTTPS, webhooks/callbacks pour opérateurs Mobile Money
- Données: MongoDB (collections par domaine), stockage objets pour médias optimisés
- Sécurité: OAuth2/JWT, MFA via OTP (SIM/MM), chiffrage au repos (KMS) et en transit (TLS)
- Observabilité: logs structurés, métriques, traçage distribué
- CI/CD: Dev, Staging, Prod; pipelines avec tests, scans sécurité et déploiement progressif
- Scalabilité: horizontal (autoscaling), équilibrage de charge, files d’attente pour asynchronisme (ex: Celery/RQ + Redis)

---

## 3. Modèle de données (MongoDB – aperçu)

- user: identité, adhésion aux valeurs chrétiennes (bool), kycStatus, phone, mmProvider, mfaMethods, roles
- kyc_case: pays, pièces, statut, preuves, décisions
- transaction: type (deposit/withdraw/donation/dues), amount, currency, provider, status, callbackData, reconciled, createdAt
- tontine: name, description, rules, schedule, members[], rotationOrder[], penalties
- tontine_payment: tontineId, memberId, dueDate, paidAt, penalty
- project: ownerId, title, description, media[], rewards[], status (submitted/approved/rejected)
- donation: projectId, donorId, amount, suggestionBucket, message
- audit_log: actorId, action, entity, entityId, payloadHash, signature, ts
- rule: jurisdiction, kycRules, amlRules, limits, mfaRequirements

---

## 4. Modules et responsabilités

- Identité & Conformité: inscription, adhésion valeurs, KYC/AML par pays (Rule Engine)
- Paiements & Mobile Money: intégration Orange/Moov, callbacks, réconciliation, gestion erreurs
- Tontine: ordre de rotation déterministe, cotisations, rappels, pénalités
- Crowdfunding/Dons: workflow de soumission, modération admin, contreparties, optimisation VMT
- Média: upload compressé, ratio 3:2, tailles cibles; reprise sur réseau lent
- Audit & Transparence: journal immuable, requêtage/auditabilité
- UX Mobile-First: menus rapides style USSD, parcours critiques < 5s

---

## 5. Roadmap par phases

Phase 0 — Fondations (S1–S2)
- Design système, sécurité, data privacy, charte éthique
- Mise en place CI/CD, environnements, observabilité
- SSO/JWT, gestion des rôles, OTP provider (SIM/MM)

Phase 1 — Identité & Règles (S3–S4)
- Module d’inscription + case d’adhésion aux valeurs chrétiennes
- Rule Engine KYC/AML (pays → exigences dynamiques)
- Démarrage KYC Sénégal (CNI + preuve d’adresse) + pipeline de vérification

Phase 2 — Paiements Mobile Money (S5–S7)
- Intégration Orange/Moov (sandboxes), callbacks, stockage des états
- File d’attente asynchrone + job de réconciliation
- SLA < 5s avec confirmations asynchrones

Phase 3 — Tontine Digitale (S8–S10)
- Création/adhésion, algorithme de rotation déterministe
- Cotisations, rappels, pénalités automatiques
- Tableaux de bord et export

Phase 4 — Crowdfunding & Dons (S11–S13)
- Soumission projets, modération admin, publication
- Dons, récompenses, optimisation VMT (suggestions, montants prédéfinis)
- Média optimisé (compression, ratio, reprise)

Phase 5 — Conformité & Audit (S14–S15)
- Journal immuable consultable + portails auditeurs
- Rapports conformité (PAPSS, AML), export régulateur

Phase 6 — Durcissement & Scalabilité (S16+)
- Tests charge x10, chaos/latence, autoscaling
- Optimisations QoS, CDN, caching

---

## 6. Exigences critiques (traçabilité)

- EF-101/102/103: Inscription + adhésion + MFA OTP SIM
- EF-201/202/203: Intégrations MM bidirectionnelles, transfrontalier, journal immuable
- EF-302/303: Rotation déterministe, pénalités et rappels
- EF-401/402/403: Workflow projet, média optimisé, VMT
- ENF-101/102: Chiffrement, modération/éthique, sensible (religion)
- ENF-201: Rule Engine KYC/AML
- ENF-301/302/303: Optimisation bas débit, < 5s, scalabilité

---

## 7. Sécurité & conformité

- Données sensibles (religion, identité): minimisation, chiffrement champ par champ (FPE/AES-GCM), rotation clés
- Secrets: vault/KMS, rotation, least privilege
- AuthN/AuthZ: OAuth2/JWT, MFA (OTP), RBAC admin/modérateurs
- Privacy: consentement explicite, droits d’accès/effacement, journaux d’accès
- Éthique: charte, signalement, signalers de confiance, workflow de modération

---

## 8. Performance & résilience

- Réseaux lents: compression JSON, gzip/br, images webp/avif, reprise upload, limites taille
- Priorisation QoS: transactions > médias; files d’attente pour callbacks
- Caching: CDN pour assets; cache de lecture côté API
- SLO: confirmation transaction < 5s (asynchrone si nécessaire)

---

## 9. Test & Qualité

- Tests unitaires/intégration/contract (API), e2e mobile
- Tests charge: x10 volume, profils réalistes 2G/3G
- Tests résilience: latence/échecs opérateurs, retries/idempotence
- Sécurité: SAST/DAST, pentest, scans dépendances

---

## 10. KPI & instrumentation

- TRxR Mobile Money ≥ 98.5%
- Latence confirmation < 5s
- 30d Active Users ≥ 30%
- VMT: +15%/an
- Observabilité: traces, métriques p95/p99, alerting SLO

---

## 11. Livrables

- Apps mobiles (Android/iOS), interface d’administration web
- Code source, doc technique et utilisateur
- Environnements Dev/Staging/Prod, jeux de tests
- Rapports d’audit & conformité

---

## 12. Risques & mitigations

- Variabilité API Mobile Money → abstraction + files + retries + idempotence
- Contraintes réglementaires multi-pays → Rule Engine + feature flags
- Réseaux lents → optimisation agressive + parcours asynchrones
- Sécurité données sensibles → chiffrement granulaire + audits réguliers

---

## 13. Critères d’acceptation (exemples)

- Paiement dépôt/retrait confirme sous 5s (ack asynchrone) et réconciliation automatique sous 10 min
- Algorithme de rotation reproductible et auditable par export JSON signé
- Tous les événements critiques présents dans le journal immuable consultable par admin/auditeur
- Images téléchargées respectent ratio 3:2 et compression automatique ≤ 200KB
