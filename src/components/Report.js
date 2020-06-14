import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Breadcrumbs } from "./Report/Breadcrumbs";
import { Description } from "./Report/Description";
import { StatsPeople } from "./Report/StatsPeople";
import { StatsFinancial } from "./Report/StatsFinancial";
import { StatsCopying } from "./Report/StatsCopying";

export default function Report() {
  const { id } = useParams();

  const report = useSelector((state) =>
    state.reports.items.find((item) => item.kopuk === id)
  );
  return report ? (
    <div>
      <Breadcrumbs report={report} />
      <Description report={report} />
      <StatsPeople report={report} />
      <StatsFinancial report={report} />
      <StatsCopying report={report} />
    </div>
  ) : (
    <div>
      <h2>Данные по организации не найдены</h2>
    </div>
  );
}
