import React from "react";

interface PanelProps {
  title: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

const PanelStyles: Record<string, React.CSSProperties> = {
  panel: {
    border: "1px solid black",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    maxWidth: "400px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "12px",
  },
  title: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    minWidth: 0,
    wordBreak: "break-word",
  },
  actions: {
    display: "flex",
    flexShrink: 0,
  },
};

export const Panel = ({ title, children, actions }: PanelProps) => {
  const hasActions = React.Children.count(actions) > 0;

  return (
    <section style={PanelStyles.panel}>
      <div style={PanelStyles.header}>
        <h2 style={PanelStyles.title}>{title}</h2>
        {hasActions && <div style={PanelStyles.actions}>{actions}</div>}
      </div>
      {children && <div>{children}</div>}
    </section>
  );
};
