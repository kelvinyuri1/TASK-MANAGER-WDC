import { CardStyleType, Container } from "./style";

type StatsCardTypes = {
  title: string;
  icon: string;
  number?: number;
  total?: number;
  variant?: CardStyleType;
  onclick?: () => void;
};

export function StatsCard({
  title,
  icon,
  number,
  total,
  variant = "neutral",
  onclick,
}: StatsCardTypes) {
  const percentage = number && total ? (number / total) * 100 : null;
  return (
    <Container variant={variant} onClick={onclick}>
      <div>
        <h3>
          {title} {percentage && `${percentage.toFixed(2)}%`}
        </h3>
        <p>{number || "-"}</p>

        <i className="material-icons">{icon}</i>
      </div>
    </Container>
  );
}
