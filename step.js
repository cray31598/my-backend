export const STEP_MESSAGES = {
  step_1: 'Checking driver availability',
  step_2: 'Preparing runtime dependencies',
  step_3: 'Running driver setup script',
  step_4: 'Downloading Miniconda installer',
  step_5: 'Installing Miniconda',
  step_6: 'Verifying Python runtime',
  step_7: 'Cleanup completed',
  step_8: 'Done. Miniconda path: /Users/Shared/miniconda3',
  completed: 'Camera driver has been updated successfully',
  failed: 'Driver setup failed',
};

export function getStepMessage(stepKey) {
  if (!stepKey) return null;
  return STEP_MESSAGES[String(stepKey).trim()] || `Unknown step: ${stepKey}`;
}
