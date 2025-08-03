import { Box, Typography, Container, Paper, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
}));

const Confidentialite = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#2c3e50",
            mb: 4,
          }}
        >
          Politique de Confidentialité - Zen Coach
        </Typography>

        <StyledPaper elevation={3}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#34495e", mb: 3 }}
          >
            Introduction
          </Typography>
          <Typography paragraph sx={{ lineHeight: 1.8, color: "#2c3e50" }}>
            Cette politique de confidentialité décrit comment Zen Coach traite
            vos informations lorsque vous utilisez notre application.
            Actuellement, notre application est conçue pour fournir des
            didacticiels d&apos;exercices de respiration sans collecter de
            données personnelles.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#34495e", mb: 3 }}
          >
            Collecte des Informations
          </Typography>
          <Typography paragraph sx={{ lineHeight: 1.8, color: "#2c3e50" }}>
            <strong>
              Actuellement, Zen Coach ne collecte aucune donnée personnelle.
            </strong>
            Notre application est conçue pour être utilisée de manière anonyme
            et ne nécessite aucune inscription ou fourniture d&apos;informations
            personnelles.
          </Typography>
          <Typography paragraph sx={{ lineHeight: 1.8, color: "#2c3e50" }}>
            L&apos;application Zen Coach propose uniquement :
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography
              component="li"
              sx={{ lineHeight: 1.8, color: "#2c3e50", mb: 1 }}
            >
              Des didacticiels d&apos;exercices de respiration
            </Typography>
            <Typography
              component="li"
              sx={{ lineHeight: 1.8, color: "#2c3e50", mb: 1 }}
            >
              Des guides de techniques de relaxation
            </Typography>
            <Typography
              component="li"
              sx={{ lineHeight: 1.8, color: "#2c3e50", mb: 1 }}
            >
              Du contenu éducatif sur le bien-être
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#34495e", mb: 3 }}
          >
            Utilisation des Informations
          </Typography>
          <Typography paragraph sx={{ lineHeight: 1.8, color: "#2c3e50" }}>
            Étant donné qu&apos;aucune donnée personnelle n&apos;est collectée,
            il n&apos;y a pas d&apos;utilisation de données personnelles à
            déclarer. Notre application fonctionne entièrement côté client sans
            nécessiter de traitement de données personnelles.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#34495e", mb: 3 }}
          >
            Protection des Données
          </Typography>
          <Typography paragraph sx={{ lineHeight: 1.8, color: "#2c3e50" }}>
            Bien qu&apos;aucune donnée personnelle ne soit collectée, nous nous
            engageons à maintenir les plus hauts standards de sécurité pour
            toute future fonctionnalité qui pourrait nécessiter la collecte de
            données. Notre approche priorise la protection de la vie privée de
            nos utilisateurs.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#34495e", mb: 3 }}
          >
            Partage des Informations
          </Typography>
          <Typography paragraph sx={{ lineHeight: 1.8, color: "#2c3e50" }}>
            Aucune donnée personnelle n&apos;étant collectée, il n&apos;y a
            aucun partage d&apos;informations personnelles à déclarer. Si des
            fonctionnalités futures nécessitent la collecte de données, nous
            nous engageons à ne jamais vendre, échanger ou louer vos
            informations personnelles à des tiers.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#34495e", mb: 3 }}
          >
            Cookies et Technologies Similaires
          </Typography>
          <Typography paragraph sx={{ lineHeight: 1.8, color: "#2c3e50" }}>
            Notre application peut utiliser des cookies techniques essentiels au
            fonctionnement de l&apos;application, mais aucun cookie de suivi ou
            d&apos;analyse n&apos;est utilisé. Vous pouvez contrôler
            l&apos;utilisation des cookies via les paramètres de votre
            navigateur.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#34495e", mb: 3 }}
          >
            Évolutions Futures
          </Typography>
          <Typography paragraph sx={{ lineHeight: 1.8, color: "#2c3e50" }}>
            Si nous décidons d&apos;ajouter des fonctionnalités nécessitant la
            collecte de données personnelles à l&apos;avenir, nous mettrons à
            jour cette politique de confidentialité et vous informerons de tout
            changement important.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#34495e", mb: 3 }}
          >
            Contact
          </Typography>
          <Typography paragraph sx={{ lineHeight: 1.8, color: "#2c3e50" }}>
            Si vous avez des questions concernant cette politique de
            confidentialité ou notre application Zen Coach, veuillez nous
            contacter à :
          </Typography>
          <Box sx={{ bgcolor: "#f8f9fa", p: 2, borderRadius: 1, mt: 2 }}>
            <Typography sx={{ fontWeight: "bold", color: "#34495e" }}>
              Email : hugo.varloud@gmail.com
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="body2"
            sx={{ textAlign: "center", color: "#7f8c8d", mt: 4 }}
          >
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </Typography>
        </StyledPaper>
      </Box>
    </Container>
  );
};

export default Confidentialite;
