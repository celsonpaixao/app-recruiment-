import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Typography from "../components/typography";
import GlobalIcons from "../components/global_Icons";
import GlobalButton from "../components/global_button";
import { COLORS } from "../styles/color_style";
import FeedChartComponent from "./feed_chart_component";

interface Participant {
  name: string;
  imageUrl: string;
}

interface SchedulingCardProps {
  type: "scheduling";
  title: string;
  dateTime: string;
  description: string;
  participants?: Participant[];
}

interface JobCardProps {
  type: "job";
  title: string;
  description: string;
  skills: string[];
  local: string;
  company: string;
  companyLogo: string;
  candidates: number;
  endDate: string;
  status: "active" | "closed" | "pending";
}

type FeedCardProps = SchedulingCardProps | JobCardProps;

const CardHeader = ({
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
}) => (
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
        {buttonText}
      </Typography>
      <GlobalIcons name="arrow-circle-right" color={COLORS.primary} size={16} />
    </GlobalButton>
  </View>
);

const SchedulingCardContent = ({
  dateTime,
  description,
  participants,
}: Omit<SchedulingCardProps, "type" | "title">) => (
  <View style={styles.feedCardContent}>
    <View style={styles.dateContainer}>
      <GlobalIcons name="schedule" color={COLORS.primary} size={16} />
      <Typography
        variant="button-inter-medium"
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
      <View style={styles.participantsContainer}>
        <Typography
          variant="h3-plusjakartasans-regular"
          style={{ color: COLORS.gray[900] }}
        >
          Participantes:
        </Typography>
        <View style={styles.participantsImages}>
          {participants.map((participant, index) => (
            <View key={index} style={styles.participantItem}>
              <Image
                source={{ uri: participant.imageUrl }}
                style={styles.participantImage}
              />
            </View>
          ))}
        </View>
      </View>
    )}
  </View>
);

const JobCardContent = ({
  title,
  candidates,
  status,
  company,
  companyLogo,
  skills,
  endDate,
}: Pick<
  JobCardProps,
  | "title"
  | "candidates"
  | "status"
  | "company"
  | "companyLogo"
  | "skills"
  | "endDate"
>) => {
  const statusColor =
    status === "active"
      ? COLORS.success
      : status === "closed"
      ? COLORS.error
      : COLORS.gray[500];

  return (
    <View style={styles.feedCardContent}>
      <Image source={{ uri: companyLogo }} style={styles.companyLogo} />
      <View style={styles.titleStatusContainer}>
        <Typography
          variant="h3-plusjakartasans-semiBold"
          style={{ color: COLORS.gray[900] }}
        >
          {title}
        </Typography>
        <View
          style={[
            styles.statusContainer,
            { backgroundColor: `${statusColor}30` },
          ]}
        >
          <Typography
            variant="button-plusjakartasans-regular"
            style={{ color: statusColor }}
          >
            {status === "active"
              ? "Pulicada"
              : status === "closed"
              ? "Encerrada"
              : "Pendente"}
          </Typography>
        </View>
      </View>
      <Typography
        variant="h3-plusjakartasans-regular"
        style={{ color: COLORS.gray[600] }}
      >
        {company}
      </Typography>
      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillTag}>
            <Typography
              variant="caption-plusjakartasans-regular"
              style={{ color: COLORS.gray[950] }}
            >
              {skill}
            </Typography>
          </View>
        ))}
      </View>
      <View style={styles.jobDetails}>
        <View style={styles.jobInfo}>
          <Typography
            variant="p-plusjakartasans-regular"
            style={{ color: COLORS.gray[900] }}
          >
            {candidates} Candidatos
          </Typography>
        </View>
        <Typography
          variant="p-plusjakartasans-regular"
          style={{ color: COLORS.gray[700] }}
        >
          {`Encerramento: ${endDate}`}
        </Typography>
      </View>
    </View>
  );
};

const FeedCard = (props: FeedCardProps) => {
  const containerStyle = [
    styles.feedCardContainer,
    props.type === "job" && styles.jobCard,
  ];

  if (props.type === "scheduling") {
    return (
      <View style={containerStyle}>
        <CardHeader title={props.title} buttonText="Ver tudo" />
        <SchedulingCardContent
          dateTime={props.dateTime}
          description={props.description}
          participants={props.participants}
        />
      </View>
    );
  }

  if (props.type === "job") {
    return (
      <View style={containerStyle}>
        <CardHeader title="Vaga" buttonText="Detalhes" />
        <JobCardContent
          title={props.title}
          candidates={props.candidates}
          status={props.status}
          company={props.company}
          companyLogo={props.companyLogo}
          skills={props.skills}
          endDate={props.endDate}
        />
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
      participants: [
        {
          name: "Carlos",
          imageUrl: "https://picsum.photos/200/200?random=1",
        },
        {
          name: "Mariana",
          imageUrl: "https://picsum.photos/200/200?random=2",
        },
      ],
    },
    {
      type: "job",
      title: "UI/UX Designer",
      description: "Buscamos um UI/UX Designer talentoso...",
      skills: ["Figma", "Adobe XD", "Sketch"],
      local: "Remoto",
      company: "Tech Solutions",
      companyLogo: "https://picsum.photos/100/100?random=5",
      candidates: 25,
      endDate: "20/03/25",
      status: "active",
    },
    {
      type: "scheduling",
      title: "Agendamentos",
      dateTime: "14 Maio, 14h - 15h",
      description: "Reunião com equipe de produto",
      participants: [
        {
          name: "João",
          imageUrl: "https://picsum.photos/200/200?random=3",
        },
        {
          name: "Maria",
          imageUrl: "https://picsum.photos/200/200?random=4",
        },
      ],
    },
    {
      type: "job",
      title: "Gerente de Projetos",
      description: "Precisamos de um gerente experiente...",
      skills: ["Scrum", "Kanban", "JIRA"],
      local: "Híbrido",
      company: "SoftCorp",
      companyLogo: "https://picsum.photos/100/100?random=6",
      candidates: 10,
      endDate: "20/03/25",
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
    // Removed fixed height to allow content-based sizing
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
    maxWidth: 160,
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
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  participantsContainer: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  participantsImages: {
    flexDirection: "row",
  },
  participantItem: {
    alignItems: "center",
    flexDirection: "row",
  },
  participantImage: {
    width: 35,
    height: 35,
    borderRadius: 100,
    borderColor: COLORS.backgroundLight,
    borderWidth: 3,
    marginLeft: -10,
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  titleStatusContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
  },
  jobDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  skillTag: {
    backgroundColor: COLORS.gray[100],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
});

export default HomeFeed;
