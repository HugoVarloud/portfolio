import { Box, Typography, Container, Paper, Divider, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
  backgroundColor: "var(--color-card)",
  color: "var(--color-text)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  border: "1px solid var(--color-border)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
}));

const SectionTitle = ({ children }) => (
  <Typography
    variant="h4"
    gutterBottom
    sx={{ color: "var(--color-text)", mb: 3 }}
  >
    {children}
  </Typography>
);

const Body = ({ children }) => (
  <Typography paragraph sx={{ lineHeight: 1.8, color: "var(--color-text)" }}>
    {children}
  </Typography>
);

const Confidentialite = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          /* Barre de navigation fixe : éviter que le contenu passe dessous */
          pt: "calc(var(--header-height) + 24px)",
          pb: 4,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "var(--color-text)",
            mb: 2,
            /* Annule index.css h1 { font-size: 3.2em } qui géantissait le titre */
            fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.5rem" },
            lineHeight: 1.35,
            maxWidth: "100%",
          }}
        >
          Politique de confidentialité — Zen Coach
        </Typography>

        <StyledPaper elevation={3}>
          <Body>
            La présente politique décrit comment l&apos;application mobile Zen
            Coach (respiration guidée, citations, notifications, abonnement
            freemium) traite les informations en lien avec son utilisation.
            Elle vise à être transparente au regard des exigences des
            développeurs sur Google Play concernant les données utilisateur.
          </Body>

          <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

          <SectionTitle>Responsable / éditeur</SectionTitle>
          <Body>
            L&apos;éditeur de l&apos;application Zen Coach est{" "}
            <strong>Hugo Varloud</strong>. Contact :{" "}
            <strong>hugo.varloud@gmail.com</strong>. Pour toute question
            relative à cette politique ou à vos données, vous pouvez utiliser
            les coordonnées indiquées à la section « Contact et exercice des
            droits » ci-dessous.
          </Body>

          <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

          <SectionTitle>Données traitées</SectionTitle>
          <Body>
            Zen Coach ne vous impose pas de créer un compte sur nos serveurs
            pour utiliser les fonctionnalités de base. Les traitements
            principaux sont les suivants :
          </Body>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <Typography
              component="li"
              sx={{
                lineHeight: 1.8,
                color: "var(--color-text)",
                mb: 1,
              }}
            >
              <strong>Données stockées localement sur l&apos;appareil</strong>{" "}
              : préférences (par exemple langue, réglages de l&apos;application),
              contenus mis en cache, et informations liées au statut premium ou
              aux achats tels que conservés par le système ou le stockage local
              de l&apos;application (par exemple identifiants ou état d&apos;achat
              géré côté appareil). Ces données restent sur votre téléphone sauf
              indication contraire explicite dans l&apos;application.
            </Typography>
            <Typography
              component="li"
              sx={{
                lineHeight: 1.8,
                color: "var(--color-text)",
                mb: 1,
              }}
            >
              <strong>Achats intégrés (in-app)</strong> : les paiements et la
              gestion des abonnements passent par{" "}
              <strong>Google Play</strong>. Google traite les données nécessaires
              au paiement et à la facturation selon ses propres règles (voir
              section « Achats via Google Play »).
            </Typography>
            <Typography
              component="li"
              sx={{
                lineHeight: 1.8,
                color: "var(--color-text)",
                mb: 1,
              }}
            >
              <strong>Notifications</strong> : si vous activez les
              notifications, le système Android peut traiter des métadonnées
              techniques associées à l&apos;envoi des rappels ou messages
              (selon votre version d&apos;Android et vos réglages).
            </Typography>
          </Box>
          <Body>
            Nous ne vendons pas vos données personnelles à des tiers au titre
            de cette politique.
          </Body>

          <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

          <SectionTitle>Données de santé / bien-être</SectionTitle>
          <Body>
            Zen Coach propose du contenu de bien-être (notamment respiration
            guidée, citations).{" "}
            <strong>
              L&apos;application ne collecte pas de données de santé issues de
              capteurs physiologiques
            </strong>{" "}
            (par exemple fréquence cardiaque, oxygénation) et{" "}
            <strong>
              n&apos;enregistre pas de données de santé via des API du type Health
              Connect
            </strong>{" "}
            ou équivalent pour constituer un dossier santé sur nos systèmes.
          </Body>
          <Body>
            Les exercices de respiration et le contenu associé sont{" "}
            <strong>traités localement sur l&apos;appareil</strong>. Nous ne
            recevons pas, via l&apos;application, de mesures physiologiques
            issues de capteurs, et aucune donnée de ce type n&apos;est transmise
            vers des serveurs que nous exploitons pour constituer un dossier
            santé. L&apos;usage principal décrit ici ne requiert pas de compte
            utilisateur sur nos serveurs ; les traitements liés aux achats par
            Google Play sont précisés dans la section « Achats via Google Play ».
          </Body>

          <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

          <SectionTitle>Permissions de l&apos;application</SectionTitle>
          <Body>
            Selon les fonctionnalités et la version d&apos;Android, Zen Coach peut
            demander notamment :
          </Body>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <Typography
              component="li"
              sx={{
                lineHeight: 1.8,
                color: "var(--color-text)",
                mb: 1,
              }}
            >
              la <strong>notification</strong> pour les rappels ou messages ;
            </Typography>
            <Typography
              component="li"
              sx={{
                lineHeight: 1.8,
                color: "var(--color-text)",
                mb: 1,
              }}
            >
              la <strong>vibration</strong> pour les retours haptiques éventuels ;
            </Typography>
            <Typography
              component="li"
              sx={{
                lineHeight: 1.8,
                color: "var(--color-text)",
                mb: 1,
              }}
            >
              l&apos;accès au <strong>stockage / médias</strong> pour
              enregistrer une image générée dans la galerie de l&apos;appareil,
              lorsque cette fonction est proposée.
            </Typography>
          </Box>
          <Body>
            Vous pouvez retirer ces autorisations dans les paramètres Android de
            votre appareil ; certaines fonctions peuvent alors être indisponibles.
          </Body>

          <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

          <SectionTitle>Conservation des données</SectionTitle>
          <Body>
            Les données enregistrées <strong>localement</strong> par
            l&apos;application le restent tant que l&apos;application est
            installée et que vous ne les effacez pas via les paramètres du
            système ou de l&apos;app.
          </Body>
          <Body>
            <strong>Désinstallation</strong> : supprimer Zen Coach de votre
            appareil entraîne en principe l&apos;effacement des données
            applicatives stockées dans l&apos;espace privé de l&apos;app, sous
            réserve du comportement du système Android et des éventuelles
            sauvegardes gérées par Google ou par vous-même.
          </Body>
          <Body>
            Les informations relatives aux achats gérées par{" "}
            <strong>Google Play</strong> peuvent être conservées par Google
            conformément à ses propres règles, indépendamment de la désinstallation
            de l&apos;application.
          </Body>

          <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

          <SectionTitle>Suppression des données et droits</SectionTitle>
          <Body>
            Pour effacer les données locales de l&apos;application sans
            désinstaller immédiatement l&apos;app, vous pouvez utiliser le chemin
            habituel sur Android (libellés pouvant varier selon la version) :
          </Body>
          <Box
            component="blockquote"
            sx={{
              borderLeft: "4px solid var(--color-border)",
              pl: 2,
              my: 2,
              color: "var(--color-text)",
            }}
          >
            <Typography sx={{ lineHeight: 1.8 }}>
              <strong>Paramètres</strong> → <strong>Applications</strong> →{" "}
              <strong>Zen Coach</strong> → <strong>Stockage</strong> →{" "}
              <strong>Effacer les données</strong>
            </Typography>
          </Box>
          <Body>
            Vous pouvez aussi <strong>désinstaller</strong> l&apos;application
            pour supprimer les données associées à l&apos;app sur l&apos;appareil
            (sous réserve des points ci-dessus concernant les sauvegardes et
            Google Play).
          </Body>
          <Body>
            Pour toute demande concernant vos données ou l&apos;exercice de vos
            droits (accès, rectification, suppression lorsque applicable, etc.),
            vous pouvez nous écrire à l&apos;adresse suivante :{" "}
            <strong>hugo.varloud@gmail.com</strong>. Nous nous efforçons de répondre
            dans un délai raisonnable, en principe sous <strong>30 jours</strong>{" "}
            ouvrés, sauf obligation légale différente ou complexité particulière
            de la demande.
          </Body>

          <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

          <SectionTitle>Achats via Google Play</SectionTitle>
          <Body>
            Le traitement des paiements, des abonnements et des informations de
            facturation associés aux achats sur Google Play relève des conditions
            et de la politique de confidentialité de Google, en complément de la
            présente politique. Vous pouvez consulter notamment :
          </Body>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <Typography
              component="li"
              sx={{
                lineHeight: 1.8,
                color: "var(--color-text)",
                mb: 1,
              }}
            >
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "var(--color-accent)" }}
              >
                Politique de confidentialité Google
              </Link>
            </Typography>
            <Typography
              component="li"
              sx={{
                lineHeight: 1.8,
                color: "var(--color-text)",
                mb: 1,
              }}
            >
              <Link
                href="https://support.google.com/googleplay/answer/2479637"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "var(--color-accent)" }}
              >
                Règles relatives à Google Play (Google)
              </Link>
            </Typography>
          </Box>

          <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

          <SectionTitle>Évolutions</SectionTitle>
          <Body>
            Nous pouvons mettre à jour cette politique pour refléter des
            évolutions de l&apos;application ou des obligations légales. La date
            de dernière mise à jour figure en bas de page ; nous vous invitons à
            la consulter régulièrement lorsque vous utilisez Zen Coach.
          </Body>

          <Divider sx={{ my: 3, borderColor: "var(--color-border)" }} />

          <SectionTitle>Contact</SectionTitle>
          <Body>
            Pour toute question sur cette politique ou sur Zen Coach :{" "}
            <strong>hugo.varloud@gmail.com</strong>
          </Body>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "var(--color-text-secondary)",
              mt: 4,
            }}
          >
            Dernière mise à jour : 24 mars 2026
          </Typography>
        </StyledPaper>
      </Box>
    </Container>
  );
};

export default Confidentialite;
