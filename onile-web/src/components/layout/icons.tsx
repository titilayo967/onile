type IconProps = { className?: string };

export function Icon({ name, className }: { name: string; className?: string }) {
  const base = className ?? "inline-block min-w-4 text-center text-xs font-semibold";

  function label(value: string) {
    return (
      <span className={base} aria-hidden="true">
        {value}
      </span>
    );
  }

  switch (name) {
    case "menu":
      return label("M");
    case "close":
      return label("X");
    case "home":
      return label("H");
    case "building":
      return label("B");
    case "chart":
      return label("C");
    case "wallet":
      return label("W");
    case "user":
      return label("U");
    case "bell":
      return label("N");
    case "shield":
      return label("S");
    case "spark":
      return label("P");
    case "coins":
      return label("D");
    case "plus":
      return label("+");
    case "token":
      return label("T");
    default:
      return label(".");
  }
}

export function NotificationIcon(props: IconProps) {
  return <Icon name="bell" className={props.className} />;
}
