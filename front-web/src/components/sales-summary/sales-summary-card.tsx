import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import React from 'react';

import './styles.css';

type Props = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

function SalesSummaryCard({ value, label, icon }: Props) {
  return (
    <div className="sale-summary-card base-card">
      {icon}
      <h3 className="sale-summary-card-value">{value}</h3>
      <span className="sales-summary-card-label">{label}</span>
    </div>
  );
}

export default SalesSummaryCard;
