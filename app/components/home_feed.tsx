import React from "react";
import { View, StyleSheet } from "react-native";
import Typography from "../components/typography";
import GlobalIcons from "../components/global_Icons";
import GlobalButton from "../components/global_button";
import { COLORS } from "../styles/color_style";

interface SchedulingCardProps {
  type: "scheduling";
  title: string;
  dateTime: string;
  description: string;
  participants?: string[];
}

interface JobCardProps {
  type: "job";
  title: string;
  description: string;
  skills: string[];
  local: string;
  company: string;
  candidates: number;
  endDate: string;
  status: "active" | "closed" | "pending";
}

type FeedCardProps = SchedulingCardProps | JobCardProps;

const FeedCard = (props: FeedCardProps) => {
  if (props.type === "scheduling") {
    const { title, dateTime, description, participants } = props;
    return (
      <View style={styles.feedCardContainer}>
        <View style={styles.feedCardAppBar}>
          <Typography
            variant="h3-plusjakartasans-medium"
            style={{ color: COLORS.gray[900] }}
          >
            {title}
          </Typography>
          <GlobalButton variant="transparent">
            <Typography
              variant="button-plusjakartasans-regular"
              style={{ color: COLORS.primary }}
            >
              Ver tudo
            </Typography>
            <GlobalIcons
              name="arrow-circle-right"
              color={COLORS.primary}
              size={16}
            />
          </GlobalButton>
        </View>
        <View style={styles.feedCardContent}>
          <View style={styles.dateContainer}>
            <GlobalIcons name="schedule" color={COLORS.primary} />
            <Typography
              variant="button-plusjakartasans-semiBold"
              style={{ color: COLORS.primary }}
            >
              {dateTime}
            </Typography>
          </View>
          <Typography
            variant="h3-plusjakartasans-semiBold"
            style={{ color: COLORS.gray[900] }}
          >
            {description}
          </Typography>
          {participants && (
            <Typography
              variant="h3-plusjakartasans-regular"
              style={{ color: COLORS.gray[900] }}
            >
              {`Participantes: ${participants.join(", ")}`}
            </Typography>
          )}
        </View>
      </View>
    );
  }

  if (props.type === "job") {
    const { title, candidates, status } = props;
    const statusColor =
      status === "active"
        ? COLORS.success
        : status === "closed"
        ? COLORS.error
        : COLORS.gray[500];
    return (
      <View style={[styles.feedCardContainer, styles.jobCard]}>
        <View style={styles.feedCardAppBar}>
          <Typography
            variant="h3-plusjakartasans-medium"
            style={{ color: COLORS.gray[900] }}
          >
            {title}
          </Typography>
          <GlobalButton variant="transparent">
            <Typography
              variant="button-plusjakartasans-regular"
              style={{ color: COLORS.primary }}
            >
              Detalhes
            </Typography>
            <GlobalIcons
              name="arrow-circle-right"
              color={COLORS.primary}
              size={16}
            />
          </GlobalButton>
        </View>
        <View style={styles.feedCardContent}>
          <View style={styles.jobInfo}>
            <GlobalIcons name="people" color={COLORS.primary} size={20} />
            <Typography
              variant="h3-plusjakartasans-semiBold"
              style={{ color: COLORS.gray[900] }}
            >
              {candidates} Candidatos
            </Typography>
          </View>
          <View
            style={[styles.statusContainer, { backgroundColor: statusColor }]}
          >
            <Typography
              variant="button-plusjakartasans-semiBold"
              style={{ color: COLORS.backgroundLight }}
            >
              {status === "active"
                ? "Ativa"
                : status === "closed"
                ? "Encerrada"
                : "Pendente"}
            </Typography>
          </View>
        </View>
      </View>
    );
  }

  return null;
};

const HomeFeed = () => {
  const feedData: FeedCardProps[] = [
    {
      type: "scheduling",
      title: "Agendamentos",
      dateTime: "13 Maio, 09h - 10h",
      description: "Entrevista agendada para vaga de UI UX Design",
      participants: ["Carlos", "Mariana"],
    },
    {
      type: "job",
      title: "UI/UX Designer",
      description: "Buscamos um UI/UX Designer talentoso...",
      skills: ["Figma", "Adobe XD", "Sketch"],
      local: "Remoto",
      company: "Tech Solutions",
      candidates: 25,
      endDate: "20 Maio",
      status: "active",
    },
    {
      type: "scheduling",
      title: "Agendamentos",
      dateTime: "14 Maio, 14h - 15h",
      description: "Reunião com equipe de produto",
      participants: ["João", "Maria"],
    },
    {
      type: "job",
      title: "Gerente de Projetos",
      description: "Precisamos de um gerente experiente...",
      skills: ["Scrum", "Kanban", "JIRA"],
      local: "Híbrido",
      company: "SoftCorp",
      candidates: 10,
      endDate: "30 Abril",
      status: "closed",
    },
  ];

  return (
    <View style={styles.feedContainer}>
      {feedData.map((item, index) => (
        <FeedCard key={index} {...item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    width: "100%",
    display: "flex",
    gap: 10,
  },
  feedCardContainer: {
    width: "100%",
    backgroundColor: COLORS.backgroundLight,
    shadowColor: COLORS.gray[400],
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 4,
    padding: 16,
    borderRadius: 12,
  },
  jobCard: {
    height: 200,
  },
  feedCardAppBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  feedCardContent: {
    borderColor: COLORS.border,
    borderWidth: 1.5,
    padding: 16,
    borderRadius: 8,
    gap: 8,
    justifyContent: "space-between",
  },
  dateContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(11, 137, 206, 0.2)",
    justifyContent: "center",
    maxWidth: 200,
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  jobInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statusContainer: {
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
});

export default HomeFeed;
