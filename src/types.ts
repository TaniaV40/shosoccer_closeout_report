export interface DeliverableItem {
  id: string;
  section: string;
  name: string;
  status: 'Complete' | 'Complete (declined by client)' | 'Complete (via GHL)' | 'Not built, deliberate omission';
  category: 'core' | 'parent-portal' | 'coach-portal' | 'admin-portal' | 'features' | 'integration' | 'training' | 'safeguarding' | 'beyond-scope';
  notes?: string;
  adminLocation?: string;
  contractBasis?: string;
  verifiedDate?: string;
}

export interface DefensiveFailurePoint {
  id: string;
  title: string;
  problem: string;
  resolution: string;
  pitchPosition: { x: number; y: number }; // percentage on pitch
  stat: string;
}

export interface StartingXIPlayer {
  id: string;
  position: string; // e.g. GK, CB, LB, RB, CM, CAM, RW, LW, ST
  title: string;
  description: string;
  category: string;
  pitchCoords: { top: string; left: string };
  specDetails: string[];
}

export interface TransactionPeriod {
  period: string;
  transactions: number;
  grossVolume: number;
  averageOrderValue: number;
  status?: string;
}

export interface PaybackScenario {
  margin: number;
  monthlyBenefit: number;
  paybackMonths: number;
}
