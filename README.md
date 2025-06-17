# 🌌 Stellar Genesis

**Stellar Genesis** est un jeu idle / incremental en JavaScript sur le thème de l'astronomie.  
Vous incarnez une entité cosmique qui génère de l'énergie stellaire pour créer et développer un univers de plus en plus complexe.

---

## 🚀 Objectif du jeu

Cliquez sur la planète pour collecter de l'énergie stellaire (⚡) et achetez des améliorations pour automatiser et accélérer la production. Plus vous avancez, plus vous évoluez à travers les étapes de la création cosmique.

---

## 🌠 Fonctionnalités

### 🪐 Collecte manuelle
- Cliquez sur la planète centrale pour générer manuellement de l'énergie stellaire.

### 🏪 Boutique dynamique
- 4 améliorations standards :
  - 🔭 **Satellite Collecteur** (+1⚡/sec)
  - 🌍 **Formation de planète** (+5⚡/sec)
  - 🌞 **Étoile naissante** (+15⚡/sec)
  - 🌀 **Mini trou noir** (+50⚡/sec)
- 🌟 **Supernova de production** (amélioration spéciale) :
  - Débloquée après l'achat de 2 satellites, 1 planète, 1 étoile et 1 trou noir
  - Coût : 4000 ⚡
  - Gain : +150 ⚡/sec
  - Réachetable avec coût évolutif

### 🌌 Système de progression
- L’univers évolue selon la production/secondes :
  - Stade 1 : Formation des planètes
  - Stade 2 : Système solaire naissant
  - Stade 3 : Expansion galactique
  - Stade 4 : Créateur d’univers

### 💾 Sauvegarde automatique & manuelle
- La partie est sauvegardée automatiquement toutes les 60 secondes.
- Un bouton 💾 permet de sauvegarder à tout moment.
- Un bouton 🔁 permet de réinitialiser complètement la progression.

### ✨ Particules et animations
- Fond animé avec dégradé galaxie et étoiles en mouvement
- Particules de poussière stellaire apparaissent à chaque clic
- Animation de pulsation et d’orbite autour du bouton principal

### 📜 Historique des améliorations
- Menu latéral déroulant affichant :
  - Sauvegarde
  - Liste des améliorations achetées
  - Réinitialisation de la partie

---

## 🧩 Technologies utilisées

- HTML / CSS (Flexbox & animation)
- JavaScript Vanilla
- LocalStorage
- Aucune dépendance externe

---

## 🎮 Lancer le jeu

1. Clone le dépôt :
   ```bash
   git clone https://github.com/Louisdlr/stellar-genesis.git
