import { FaJava } from "react-icons/fa";
import {
  SiApachekafka,
  SiArgo,
  SiDocker,
  SiHelm,
  SiJsonwebtokens,
  SiMongodb,
  SiNestjs,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbApi, TbBolt, TbBrandAzure, TbChartLine } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

// Vector icons for technologies that don't have a logo image in /assets.
export const techIcons = {
  java: { label: "Java 21", Icon: FaJava, color: "#E76F00" },
  springboot: { label: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  nestjs: { label: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  typescript: { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  rest: { label: "REST APIs", Icon: TbApi, color: "#8B6CFF" },
  react: { label: "React", Icon: SiReact, color: "#149ECA" },
  vite: { label: "Vite", Icon: SiVite, color: "#646CFF" },
  tailwind: { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  mongodb: { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  redis: { label: "Redis", Icon: SiRedis, color: "#DC382D" },
  kafka: { label: "Kafka", Icon: SiApachekafka, color: "#231F20" },
  eventhubs: { label: "Azure Event Hubs", Icon: TbBolt, color: "#0078D4" },
  azure: { label: "Azure", Icon: TbBrandAzure, color: "#0078D4" },
  azuredevops: { label: "Azure DevOps", Icon: VscAzureDevops, color: "#0078D4" },
  docker: { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  helm: { label: "Helm", Icon: SiHelm, color: "#0F1689" },
  argocd: { label: "Argo CD", Icon: SiArgo, color: "#EF7B4D" },
  jwt: { label: "JWT", Icon: SiJsonwebtokens, color: "#7A2BE2" },
  latency: { label: "p50 / p90 / p99 latency", Icon: TbChartLine, color: "#C77A00" },
};
