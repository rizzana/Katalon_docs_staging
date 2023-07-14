import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '23a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'dc0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a5f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '2c9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'f52'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '969'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '6f3'),
    exact: true
  },
  {
    path: '/javadoc',
    component: ComponentCreator('/javadoc', 'a81'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '3af'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '188'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '8b8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-roles/administrative-roles-and-permissions',
        component: ComponentCreator('/docs/administer/administration-roles/administrative-roles-and-permissions', '76d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/account-settings/account-settings',
        component: ComponentCreator('/docs/administer/administration-tasks/account-settings/account-settings', '06e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/create-an-organization-and-project',
        component: ComponentCreator('/docs/administer/administration-tasks/create-an-organization-and-project', '4a4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/join-a-testops-organization',
        component: ComponentCreator('/docs/administer/administration-tasks/join-a-testops-organization', '302'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/license-management/grant-katalon-licenses',
        component: ComponentCreator('/docs/administer/administration-tasks/license-management/grant-katalon-licenses', 'e89'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/license-management/manage-katalon-licenses',
        component: ComponentCreator('/docs/administer/administration-tasks/license-management/manage-katalon-licenses', 'c38'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/license-management/remove-a-license',
        component: ComponentCreator('/docs/administer/administration-tasks/license-management/remove-a-license', '795'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/manage-user-profile',
        component: ComponentCreator('/docs/administer/administration-tasks/manage-user-profile', '82b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/organization-management/configure-idle-timeout',
        component: ComponentCreator('/docs/administer/administration-tasks/organization-management/configure-idle-timeout', '35e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/organization-management/configure-session-timeout',
        component: ComponentCreator('/docs/administer/administration-tasks/organization-management/configure-session-timeout', '3d7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/organization-management/delete-data',
        component: ComponentCreator('/docs/administer/administration-tasks/organization-management/delete-data', '003'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/organization-management/enabledisable-strict-domain',
        component: ComponentCreator('/docs/administer/administration-tasks/organization-management/enabledisable-strict-domain', '3ea'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/organization-management/ip-address-restrictions',
        component: ComponentCreator('/docs/administer/administration-tasks/organization-management/ip-address-restrictions', '714'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/organization-management/single-sign-on-configurations',
        component: ComponentCreator('/docs/administer/administration-tasks/organization-management/single-sign-on-configurations', 'c32'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/organization-management/subdomain-configurations',
        component: ComponentCreator('/docs/administer/administration-tasks/organization-management/subdomain-configurations', 'f38'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/payment-method/payment-method',
        component: ComponentCreator('/docs/administer/administration-tasks/payment-method/payment-method', 'a6f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/product-utilization/license-utilization-dashboard',
        component: ComponentCreator('/docs/administer/administration-tasks/product-utilization/license-utilization-dashboard', '0ef'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/product-utilization/view-test-usage-and-balance-in-the-usage-dashboard',
        component: ComponentCreator('/docs/administer/administration-tasks/product-utilization/view-test-usage-and-balance-in-the-usage-dashboard', '365'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/subscription-management/katalon-platform-subscription/cancel-katalon-platform-subscription',
        component: ComponentCreator('/docs/administer/administration-tasks/subscription-management/katalon-platform-subscription/cancel-katalon-platform-subscription', '205'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/subscription-management/katalon-platform-subscription/subscribe-to-katalon-platform',
        component: ComponentCreator('/docs/administer/administration-tasks/subscription-management/katalon-platform-subscription/subscribe-to-katalon-platform', 'c7b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/subscription-management/katalon-platform-subscription/upgrade-katalon-platform-subscription',
        component: ComponentCreator('/docs/administer/administration-tasks/subscription-management/katalon-platform-subscription/upgrade-katalon-platform-subscription', 'c99'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/subscription-management/katalon-studio-enterprise-and-katalon-runtime-engine-license/cancel-license-renewal',
        component: ComponentCreator('/docs/administer/administration-tasks/subscription-management/katalon-studio-enterprise-and-katalon-runtime-engine-license/cancel-license-renewal', '5b2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/subscription-management/katalon-studio-enterprise-and-katalon-runtime-engine-license/purchase-katalon-studio-and-katalon-runtime-engine-licenses',
        component: ComponentCreator('/docs/administer/administration-tasks/subscription-management/katalon-studio-enterprise-and-katalon-runtime-engine-license/purchase-katalon-studio-and-katalon-runtime-engine-licenses', 'ed3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/subscription-management/katalon-studio-enterprise-and-katalon-runtime-engine-license/upgrade-billing-plan-of-licenses',
        component: ComponentCreator('/docs/administer/administration-tasks/subscription-management/katalon-studio-enterprise-and-katalon-runtime-engine-license/upgrade-billing-plan-of-licenses', 'bde'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/subscription-management/testcloud-subscription/cancel-testcloud-subscriptions',
        component: ComponentCreator('/docs/administer/administration-tasks/subscription-management/testcloud-subscription/cancel-testcloud-subscriptions', '48e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/subscription-management/testcloud-subscription/subscribe-to-testcloud',
        component: ComponentCreator('/docs/administer/administration-tasks/subscription-management/testcloud-subscription/subscribe-to-testcloud', '91c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/subscription-management/testcloud-subscription/upgrade-subscriptions',
        component: ComponentCreator('/docs/administer/administration-tasks/subscription-management/testcloud-subscription/upgrade-subscriptions', '993'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/support-management/grant-permission-to-access-support-portal',
        component: ComponentCreator('/docs/administer/administration-tasks/support-management/grant-permission-to-access-support-portal', '50e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/team-management/set-up-teams',
        component: ComponentCreator('/docs/administer/administration-tasks/team-management/set-up-teams', '205'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/user-management/manage-users',
        component: ComponentCreator('/docs/administer/administration-tasks/user-management/manage-users', '0c4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/administration-tasks/user-management/transfer-ownership',
        component: ComponentCreator('/docs/administer/administration-tasks/user-management/transfer-ownership', 'f44'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-platform-packages/katalon-platform-on-premises/comparison-between-katalon-platform-on-premises-and-katalon-platform',
        component: ComponentCreator('/docs/administer/katalon-platform-packages/katalon-platform-on-premises/comparison-between-katalon-platform-on-premises-and-katalon-platform', 'fc1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-platform-packages/katalon-platform-on-premises/katalon-on-premises-deployment-guide',
        component: ComponentCreator('/docs/administer/katalon-platform-packages/katalon-platform-on-premises/katalon-on-premises-deployment-guide', 'a98'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-platform-packages/katalon-platform-on-premises/katalon-platform-on-premises',
        component: ComponentCreator('/docs/administer/katalon-platform-packages/katalon-platform-on-premises/katalon-platform-on-premises', '45a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-platform-packages/katalon-platform-on-premises/katalon-platform-on-premises-use-cases',
        component: ComponentCreator('/docs/administer/katalon-platform-packages/katalon-platform-on-premises/katalon-platform-on-premises-use-cases', '662'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-platform-packages/katalon-platform-on-premises/upgrade-your-on-premises-license-server-to-v2.1.0',
        component: ComponentCreator('/docs/administer/katalon-platform-packages/katalon-platform-on-premises/upgrade-your-on-premises-license-server-to-v2.1.0', '391'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-platform-packages/katalon-platform-plans',
        component: ComponentCreator('/docs/administer/katalon-platform-packages/katalon-platform-plans', '085'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-platform-packages/katalon-platform-quotas',
        component: ComponentCreator('/docs/administer/katalon-platform-packages/katalon-platform-quotas', '84d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-platform-packages/katalon-trial-plans',
        component: ComponentCreator('/docs/administer/katalon-platform-packages/katalon-trial-plans', '617'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-platform-packages/testcloud-feature-comparison',
        component: ComponentCreator('/docs/administer/katalon-platform-packages/testcloud-feature-comparison', '65e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-platform-packages/testops-private-instance-integration-in-katalon-studio',
        component: ComponentCreator('/docs/administer/katalon-platform-packages/testops-private-instance-integration-in-katalon-studio', '994'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/activate-a-katalon-license',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/activate-a-katalon-license', '185'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/configure-proxy-authentication',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/configure-proxy-authentication', '899'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/deprecation-of-node-locked-and-floating-license-models',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/deprecation-of-node-locked-and-floating-license-models', '3d5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/how-katalon-generates-a-machine-id',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/how-katalon-generates-a-machine-id', 'dfc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-runtime-engine-devops-sunsetting',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-runtime-engine-devops-sunsetting', 'eeb'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-runtime-engine-floating-license',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-runtime-engine-floating-license', 'de5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-studio-enterprise-per-user-license',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-studio-enterprise-per-user-license', '0dd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-studio-vs-katalon-studio-enterprise-features',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-studio-vs-katalon-studio-enterprise-features', '3c5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/license-overview',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/license-overview', '30d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/trial-and-free-plans',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/trial-and-free-plans', '574'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/view-license-details',
        component: ComponentCreator('/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/view-license-details', '530'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/settings/configure-email-notifications-in-testops',
        component: ComponentCreator('/docs/administer/settings/configure-email-notifications-in-testops', '9b2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/settings/katalon-api-key-in-katalon-testops',
        component: ComponentCreator('/docs/administer/settings/katalon-api-key-in-katalon-testops', '7a8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/settings/katalon-api-keys-in-katalon-studio',
        component: ComponentCreator('/docs/administer/settings/katalon-api-keys-in-katalon-studio', '700'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/session-termination-causes',
        component: ComponentCreator('/docs/administer/troubleshooting/session-termination-causes', 'c10'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/cannot-connect-to-katalon-testops-server.-please-check-your-internet-connection-and-try-again-1',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/cannot-connect-to-katalon-testops-server.-please-check-your-internet-connection-and-try-again-1', '65d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/cannot-connect-to-katalon-testops-server.-please-check-your-internet-connection-and-try-again-2',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/cannot-connect-to-katalon-testops-server.-please-check-your-internet-connection-and-try-again-2', '89e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/cannot-receive-verification-link',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/cannot-receive-verification-link', '494'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/captcha-required',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/captcha-required', '5bd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/ip-addresses-errors',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/ip-addresses-errors', '9d6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/license-quota-exceeded',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/license-quota-exceeded', 'c0c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/machine-quota-exceeded',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/machine-quota-exceeded', '66c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/network-security-errors',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/network-security-errors', '72d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/oops-theres-something-wrong-with-this-invitation.',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/oops-theres-something-wrong-with-this-invitation.', 'e6a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/the-number-of-the-licenses-cannot-exceed-the-license-quota',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/the-number-of-the-licenses-cannot-exceed-the-license-quota', '094'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/this-account-has-been-blocked',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/this-account-has-been-blocked', '602'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/troubleshoot-activation-problems-overview',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/troubleshoot-activation-problems-overview', '316'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/your-test-result-quota-has-been-exceeded.-please-upgrade-your-plan',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/your-test-result-quota-has-been-exceeded.-please-upgrade-your-plan', 'f7c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/administer/troubleshooting/troubleshooting-activation-problem/your-trial-has-expired.-please-subscribe-to-continue-using-katalon-runtime-engine',
        component: ComponentCreator('/docs/administer/troubleshooting/troubleshooting-activation-problem/your-trial-has-expired.-please-subscribe-to-continue-using-katalon-runtime-engine', 'bb5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/analytics/analytics-overview',
        component: ComponentCreator('/docs/analyze/analytics/analytics-overview', '61c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/analytics/compare-test-results-in-katalon-testops',
        component: ComponentCreator('/docs/analyze/analytics/compare-test-results-in-katalon-testops', '54b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/analytics/defects-report',
        component: ComponentCreator('/docs/analyze/analytics/defects-report', '9a5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/analytics/visual-testing/adjust-the-pixel-sensitivity-level',
        component: ComponentCreator('/docs/analyze/analytics/visual-testing/adjust-the-pixel-sensitivity-level', '93a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/analytics/visual-testing/baseline-collection',
        component: ComponentCreator('/docs/analyze/analytics/visual-testing/baseline-collection', '69c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/analytics/visual-testing/robot-framework-integration-with-visual-testing',
        component: ComponentCreator('/docs/analyze/analytics/visual-testing/robot-framework-integration-with-visual-testing', '732'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/analytics/visual-testing/use-testops-visual-testing',
        component: ComponentCreator('/docs/analyze/analytics/visual-testing/use-testops-visual-testing', 'e10'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/analytics/visual-testing/visual-testing-overview',
        component: ComponentCreator('/docs/analyze/analytics/visual-testing/visual-testing-overview', '9f3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/integrate-katalon-studio-with-microsoft-teams',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/integrate-katalon-studio-with-microsoft-teams', 'ce0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/jira-integration/link-test-runs-to-jira-defects-in-katalon-testops',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/jira-integration/link-test-runs-to-jira-defects-in-katalon-testops', 'ba3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/jira-integration/submit-an-issue-from-katalon-studio-to-jira',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/jira-integration/submit-an-issue-from-katalon-studio-to-jira', '11b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/jira-integration/view-katalon-studio-test-results-in-jira-tickets',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/jira-integration/view-katalon-studio-test-results-in-jira-tickets', '73f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/jira-integration/view-test-results-in-the-jira-test-results-gadget',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/jira-integration/view-test-results-in-the-jira-test-results-gadget', '93f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/qtest-integration/generate-qtest---katalon-studio-parity-reports',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/qtest-integration/generate-qtest---katalon-studio-parity-reports', '3fd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/qtest-integration/view-and-upload-katalon-studio-test-execution-results-to-qtest',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/qtest-integration/view-and-upload-katalon-studio-test-execution-results-to-qtest', '6fb'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/slack-integration/manage-test-reports-in-slack---katalon-studio-integration',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/slack-integration/manage-test-reports-in-slack---katalon-studio-integration', 'b40'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/slack-integration/manage-test-reports-with-slack---katalon-testops-integration',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/slack-integration/manage-test-reports-with-slack---katalon-testops-integration', 'c7f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/upload-test-execution-results-from-katalon-studio-to-rally',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/upload-test-execution-results-from-katalon-studio-to-rally', 'b3e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/integration-for-test-analyzing/upload-test-execution-results-from-katalon-studio-to-testrail',
        component: ComponentCreator('/docs/analyze/integration-for-test-analyzing/upload-test-execution-results-from-katalon-studio-to-testrail', '2d6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/introduction-to-test-analysis',
        component: ComponentCreator('/docs/analyze/introduction-to-test-analysis', '423'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/generate-test-reports/generate-browser-based-videos-in-katalon-studio-reports',
        component: ComponentCreator('/docs/analyze/reports/generate-test-reports/generate-browser-based-videos-in-katalon-studio-reports', '967'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/generate-test-reports/generate-screen-based-videos-in-katalon-studio-reports',
        component: ComponentCreator('/docs/analyze/reports/generate-test-reports/generate-screen-based-videos-in-katalon-studio-reports', 'f70'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/manage-reports/add-mail-recipients-in-katalon-studio-test-suites',
        component: ComponentCreator('/docs/analyze/reports/manage-reports/add-mail-recipients-in-katalon-studio-test-suites', 'ef1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/manage-reports/filter-test-run-list-by-build-name-in-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/manage-reports/filter-test-run-list-by-build-name-in-katalon-testops', '3df'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/manage-reports/override-test-results-status-in-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/manage-reports/override-test-results-status-in-katalon-testops', '73a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/manage-reports/share-test-reports-via-email-in-katalon-studio',
        component: ComponentCreator('/docs/analyze/reports/manage-reports/share-test-reports-via-email-in-katalon-studio', '4d3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/reports-overview',
        component: ComponentCreator('/docs/analyze/reports/reports-overview', '12b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/upload-test-reports/upload-junit-and-katalon-studio-reports-to-testops-manually',
        component: ComponentCreator('/docs/analyze/reports/upload-test-reports/upload-junit-and-katalon-studio-reports-to-testops-manually', '4aa'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/upload-test-reports/upload-junit-and-report-files-to-using-command-line',
        component: ComponentCreator('/docs/analyze/reports/upload-test-reports/upload-junit-and-report-files-to-using-command-line', '154'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-jasmine-to-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-jasmine-to-katalon-testops', '094'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-jest-to-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-jest-to-katalon-testops', 'eb8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-mocha-to-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-mocha-to-katalon-testops', '33a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-pytest-to-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-pytest-to-katalon-testops', 'f82'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/upload-test-reports/upload-test-results-from-katalon-studio-to-katalon-testops-manually',
        component: ComponentCreator('/docs/analyze/reports/upload-test-reports/upload-test-results-from-katalon-studio-to-katalon-testops-manually', '298'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-and-customize-execution-log-in-katalon-studio',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-and-customize-execution-log-in-katalon-studio', 'da8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-bdd-reports-in-katalon-studio',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-bdd-reports-in-katalon-studio', '261'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-captured-screenshots-in-katalon-studio-reports',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-captured-screenshots-in-katalon-studio-reports', 'db0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-katalon-testops-execution-summary-in-katalon-studio',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-katalon-testops-execution-summary-in-katalon-studio', 'ad1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-test-suite-analytics-in-katalon-studio',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-test-suite-analytics-in-katalon-studio', '988'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-test-suite-and-test-suite-collection-reports-in-katalon-studio',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-test-suite-and-test-suite-collection-reports-in-katalon-studio', '0dc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/detect-abnormal-web-services-in-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/detect-abnormal-web-services-in-katalon-testops', 'e54'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/failed-test-results',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/failed-test-results', '017'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/test-runs-reports-overview',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/test-runs-reports-overview', 'b2e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-bdd-test-results-in-testops',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-bdd-test-results-in-testops', '5f0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-re-run-test-results-in-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-re-run-test-results-in-katalon-testops', 'f86'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-case-reports-in-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-case-reports-in-katalon-testops', 'c42'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/search-and-view-test-results-in-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/search-and-view-test-results-in-katalon-testops', '189'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/download-report-files-using-rest-api',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/download-report-files-using-rest-api', 'af9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/download-test-report-files',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/download-test-report-files', 'f8c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/test-run-result-details',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/test-run-result-details', 'e4c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/test-run-summary',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/test-run-summary', 'e4f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/view-test-results-and-execution-logs-in-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-run-results/view-test-results-and-execution-logs-in-katalon-testops/view-test-results-and-execution-logs-in-katalon-testops', '0ed'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/local-test-environment-reports',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/local-test-environment-reports', '11b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/platform-coverage-reports',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/platform-coverage-reports', 'd3b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/productivity-reports',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/productivity-reports', '01b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/quality-reports',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/quality-reports', '898'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/release-readiness-reports',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/release-readiness-reports', '59e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/requirement-coverage-reports',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/requirement-coverage-reports', '8bc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/test-activities-reports',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/test-activities-reports', 'e42'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/testops-dashboard-overview',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/testops-dashboard-overview', 'b3c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-traceability-matrix-in-katalon-testops',
        component: ComponentCreator('/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-traceability-matrix-in-katalon-testops', '552'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/call-test-case-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/create-test-cases/call-test-case-in-katalon-studio', 'cae'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/combine-katalon-studio-with-sap-scripting-tracker-for-windows',
        component: ComponentCreator('/docs/create-tests/create-test-cases/combine-katalon-studio-with-sap-scripting-tracker-for-windows', '3d3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/create-a-new-test-case-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/create-test-cases/create-a-new-test-case-in-katalon-studio', '389'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/create-bdd-test-cases-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/create-test-cases/create-bdd-test-cases-in-katalon-studio', '398'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/create-test-case-overview',
        component: ComponentCreator('/docs/create-tests/create-test-cases/create-test-case-overview', '8f7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/create-your-first-api-test-with-katalon-studio',
        component: ComponentCreator('/docs/create-tests/create-test-cases/create-your-first-api-test-with-katalon-studio', '83b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-manual-view',
        component: ComponentCreator('/docs/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-manual-view', 'c7e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-script-view',
        component: ComponentCreator('/docs/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-script-view', 'de8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/statements/assert-statements',
        component: ComponentCreator('/docs/create-tests/create-test-cases/statements/assert-statements', '060'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/statements/binary-statements',
        component: ComponentCreator('/docs/create-tests/create-test-cases/statements/binary-statements', '110'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/statements/branching-statements',
        component: ComponentCreator('/docs/create-tests/create-test-cases/statements/branching-statements', 'd9d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/statements/decision-making-statements',
        component: ComponentCreator('/docs/create-tests/create-test-cases/statements/decision-making-statements', '3e8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/statements/define-method',
        component: ComponentCreator('/docs/create-tests/create-test-cases/statements/define-method', '680'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/statements/exception-handling-statements',
        component: ComponentCreator('/docs/create-tests/create-test-cases/statements/exception-handling-statements', '30b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/statements/looping-statements',
        component: ComponentCreator('/docs/create-tests/create-test-cases/statements/looping-statements', 'f7f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/statements/method-call-statements',
        component: ComponentCreator('/docs/create-tests/create-test-cases/statements/method-call-statements', '91b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/statements/statements-in-katalon-studio-overview',
        component: ComponentCreator('/docs/create-tests/create-test-cases/statements/statements-in-katalon-studio-overview', 'a6c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/test-fixtures-and-test-listeners-test-hooks-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/create-test-cases/test-fixtures-and-test-listeners-test-hooks-in-katalon-studio', '437'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/using-web-services-in-a-test-case-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/create-test-cases/using-web-services-in-a-test-case-in-katalon-studio', '438'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/value-types-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/create-test-cases/value-types-in-katalon-studio', '5ba'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-test-cases/working-with-sensitive-text-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/create-test-cases/working-with-sensitive-text-in-katalon-studio', 'bee'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/analyze-cloud-studio-beta-tests/view-your-cloud-studio-beta-test-suite-report',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/analyze-cloud-studio-beta-tests/view-your-cloud-studio-beta-test-suite-report', '504'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/create-a-draft-test-case',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/create-a-draft-test-case', '591'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/draft-test-case',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/draft-test-case', 'f34'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/edit-draft-test-case',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/edit-draft-test-case', '278'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/run-a-draft-test-case',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/run-a-draft-test-case', 'c0c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/supported-actions',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-draft-test-case/supported-actions', 'd77'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-test-suite/create-a-katalon-cloud-studio-beta-test-suite',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/create-and-manage-a-test-suite/create-a-katalon-cloud-studio-beta-test-suite', '81f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/execute-cloud-studio-beta-tests/execute-katalon-cloud-studio-beta-tests',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/execute-cloud-studio-beta-tests/execute-katalon-cloud-studio-beta-tests', '607'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/execute-cloud-studio-beta-tests/schedule-a-cloud-studio-beta-test-suite',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/execute-cloud-studio-beta-tests/schedule-a-cloud-studio-beta-test-suite', '9b4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/get-started-with-cloud-studio-beta/download-and-install-katalon-platform-recorder',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/get-started-with-cloud-studio-beta/download-and-install-katalon-platform-recorder', '399'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/get-started-with-cloud-studio-beta/test-automation-workflow',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/get-started-with-cloud-studio-beta/test-automation-workflow', 'c0b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/get-started-with-cloud-studio-beta/toolbars-and-icons-in-katalon-cloud-studio-beta',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/get-started-with-cloud-studio-beta/toolbars-and-icons-in-katalon-cloud-studio-beta', 'b5c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/known-issues',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/known-issues', '4ad'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/organize-cloud-studio-beta-tests/edit-a-published-cloud-studio-beta-test-case',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/organize-cloud-studio-beta-tests/edit-a-published-cloud-studio-beta-test-case', 'ab7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/create-tests-using-katalon-cloud-studio/overview/what-is-katalon-cloud-studio-beta',
        component: ComponentCreator('/docs/create-tests/create-tests-using-katalon-cloud-studio/overview/what-is-katalon-cloud-studio-beta', 'bc5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/configure-database-connection-for-data-driven-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/configure-database-connection-for-data-driven-testing-in-katalon-studio', 'eb8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/data-driven-testing-at-test-case-level',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/data-driven-testing-at-test-case-level', '0ac'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/data-driven-testing-in-a-test-suite',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/data-driven-testing-in-a-test-suite', '245'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/data-driven-testing-with-katalon-studio',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/data-driven-testing-with-katalon-studio', '613'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/data-driven-testing-with-restful-web-service-requests',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/data-driven-testing-with-restful-web-service-requests', '180'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/execution-profile',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/execution-profile', '1d2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/global-variables',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/global-variables', '1e0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/implement-data-driven-testing-with-mysql',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/implement-data-driven-testing-with-mysql', '317'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/manage-checkpoints',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/manage-checkpoints', '6b9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/manage-data-binding',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/manage-data-binding', '9f7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/manage-test-data',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/manage-test-data', 'b5d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/perform-data-driven-testing-in-a-dynamic-test-suite',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/perform-data-driven-testing-in-a-dynamic-test-suite', '351'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/specify-iteration-names-in-data-driven-testing-reports',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/specify-iteration-names-in-data-driven-testing-reports', '6e2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/data-driven-testing/test-case-variables',
        component: ComponentCreator('/docs/create-tests/data-driven-testing/test-case-variables', '1f7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/debug-a-test-case/debug-a-test-case-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/debug-a-test-case/debug-a-test-case-in-katalon-studio', '710'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/introduction-to-test-creation/introduction-to-api-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/introduction-to-test-creation/introduction-to-api-testing-in-katalon-studio', '71e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/introduction-to-test-creation/introduction-to-desktop-app-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/introduction-to-test-creation/introduction-to-desktop-app-testing-in-katalon-studio', '414'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/introduction-to-test-creation/introduction-to-test-creation',
        component: ComponentCreator('/docs/create-tests/introduction-to-test-creation/introduction-to-test-creation', '42b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/introduction-to-test-creation/introduction-to-web-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/introduction-to-test-creation/introduction-to-web-testing-in-katalon-studio', '74f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/build-custom-keywords-with-settings-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/build-custom-keywords-with-settings-in-katalon-studio', '720'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/custom-keywords-refactoring-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/custom-keywords-refactoring-in-katalon-studio', 'f39'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/execute-test-with-katalon-studio-in-internet-explorer-ie-mode-in-microsoft-edge',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/execute-test-with-katalon-studio-in-internet-explorer-ie-mode-in-microsoft-edge', '132'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/flutter-based-application-testing-with-custom-settext-keyword-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/flutter-based-application-testing-with-custom-settext-keyword-in-katalon-studio', '334'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/handling-databases-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/handling-databases-in-katalon-studio', '847'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/handling-drag-and-drop-testing-for-web-applications-with-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/handling-drag-and-drop-testing-for-web-applications-with-katalon-studio', '155'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/how-to-perform-database-testing-using-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/how-to-perform-database-testing-using-katalon-studio', '2e6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/how-to-use-a-custom-keyword-from-other-custom-keywords-and-step-definition-classes-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/how-to-use-a-custom-keyword-from-other-custom-keywords-and-step-definition-classes-in-katalon-studio', '71a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/import-and-export-keywords-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/import-and-export-keywords-in-katalon-studio', 'c13'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/import-custom-keywords-classes-recursively-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/import-custom-keywords-classes-recursively-in-katalon-studio', '90a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/introduction-to-custom-keywords-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/introduction-to-custom-keywords-in-katalon-studio', 'f4a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/mark-tests-status-for-a-custom-keyword-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/mark-tests-status-for-a-custom-keyword-in-katalon-studio', '2ab'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/custom-keywords/sample-custom-keywords-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/custom-keywords/sample-custom-keywords-in-katalon-studio', '125'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-checkpoint',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-checkpoint', '8f6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-equal',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-equal', 'f30'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-greater-than',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-greater-than', '500'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-greater-than-or-equal',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-greater-than-or-equal', '154'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-less-than',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-less-than', 'e64'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-less-than-or-equal',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-less-than-or-equal', '554'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-match',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-match', 'aed'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-equal',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-equal', '310'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-match',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-match', '7ef'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-file',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-file', 'a6d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-file-with-tags',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-file-with-tags', '7f7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder', '533'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder-with-tags',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder-with-tags', '99b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-with-cucumber-runner',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-with-cucumber-runner', 'e74'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-check-element',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-check-element', '44f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-clear-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-clear-text', '088'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-close-application',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-close-application', '68b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-close-notifications',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-close-notifications', '216'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-double-tap',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-double-tap', '9ff'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-drag-and-drop',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-drag-and-drop', 'c69'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-execute-mobile-command',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-execute-mobile-command', '902'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-find-image-element',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-find-image-element', 'c4d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-find-image-elements',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-find-image-elements', '29f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-attribute', '2f8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-current-orientation',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-current-orientation', 'c3e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-height',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-height', 'd58'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-manufacturer',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-manufacturer', '722'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-os',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-os', 'e6b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-os-version',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-os-version', 'e2f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-width',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-width', '427'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-height',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-height', 'f10'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-left-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-left-position', '548'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-top-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-top-position', 'ee5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-width',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-width', '475'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-text', '602'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-hide-keyboard',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-hide-keyboard', '588'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-long-press',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-long-press', 'f17'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-open-notifications',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-open-notifications', '127'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-perform-touch-id',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-perform-touch-id', '12b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-pinch-to-zoom-in-at-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-pinch-to-zoom-in-at-position', '765'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-pinch-to-zoom-out-at-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-pinch-to-zoom-out-at-position', '0c2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-back',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-back', '70d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-home',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-home', 'dac'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-run-the-ios-app-in-the-background-and-wait',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-run-the-ios-app-in-the-background-and-wait', 'fe3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-scroll-to-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-scroll-to-text', 'c12'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-select-list-item-by-index',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-select-list-item-by-index', '9cc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-select-list-item-by-label',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-select-list-item-by-label', '73b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-send-keys',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-send-keys', '0d8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-encrypted-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-encrypted-text', 'a0f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-slider-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-slider-value', 'f01'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-text', 'f2d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-start-application',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-start-application', '228'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-start-existing-application',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-start-existing-application', '1f8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-swipe',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-swipe', 'dbc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-landscape',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-landscape', 'b2b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-native',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-native', 'c5d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-portrait',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-portrait', '060'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-web-view',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-web-view', '941'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-area-screenshot',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-area-screenshot', 'f19'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-element-screenshot',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-element-screenshot', 'd14'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-screenshot',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-screenshot', '82a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap', '2c2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-and-hold',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-and-hold', '6b1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-and-hold-at-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-and-hold-at-position', 'f18'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-at-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-at-position', '8dd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-on-image',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-on-image', '5b2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-toggle-airplane-mode',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-toggle-airplane-mode', 'b24'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-toggle-wifi',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-toggle-wifi', '492'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-uncheck-element',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-uncheck-element', '924'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-unlock-screen',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-unlock-screen', 'bf9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-use-fingerprint',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-use-fingerprint', 'a00'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-attribute-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-attribute-value', '3c2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-checked',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-checked', '431'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-exist',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-exist', 'ea5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-has-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-has-attribute', '572'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-checked',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-checked', '1a6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-exist',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-exist', 'fb4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-has-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-has-attribute', 'd0c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-visible',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-visible', '5bc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-text', 'df3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-visible',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-visible', '61c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-image-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-image-present', 'da7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-is-landscape',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-is-landscape', 'd15'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-is-portrait',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-is-portrait', '6ff'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-attribute-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-attribute-value', 'a62'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-has-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-has-attribute', '3d8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-not-has-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-not-has-attribute', 'c04'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-not-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-not-present', '1fe'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-present', '525'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-call-test-case',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-call-test-case', 'ec8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-comment',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-comment', '72e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-concatenate',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-concatenate', 'f8f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-delay',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-delay', 'f1c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-mobile-testing-keywords/mobile-take-area-screenshot-as-checkpoint',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-mobile-testing-keywords/mobile-take-area-screenshot-as-checkpoint', '514'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-mobile-testing-keywords/mobile-take-element-screenshot-as-checkpoint',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-mobile-testing-keywords/mobile-take-element-screenshot-as-checkpoint', '76e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-mobile-testing-keywords/mobile-take-screenshot-as-checkpoint',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-mobile-testing-keywords/mobile-take-screenshot-as-checkpoint', '605'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-area-screenshot-as-checkpoint',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-area-screenshot-as-checkpoint', 'eff'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-element-screenshot-as-checkpoint',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-element-screenshot-as-checkpoint', 'd92'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-full-page-screenshot-as-checkpoint',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-full-page-screenshot-as-checkpoint', '9e1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-screenshot-as-checkpoint',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-screenshot-as-checkpoint', '1d1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-contains-string',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-contains-string', '608'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-element-property-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-element-property-value', 'd60'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-elements-count',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-elements-count', 'b1f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-har-file-generation',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-har-file-generation', 'd45'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-response-status-code',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-response-status-code', '86a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-send-request',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-send-request', 'd82'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-send-request-and-verify',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-send-request-and-verify', 'd13'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-set-har-file-generation',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-set-har-file-generation', '354'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-an-xml-string-against-a-schema',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-an-xml-string-against-a-schema', '927'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-graphql-request-against-a-graphql-schema',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-graphql-request-against-a-graphql-schema', 'fe5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-json-string-against-a-schema',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-json-string-against-a-schema', '753'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-property-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-property-value', '201'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-text', 'ccf'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-elements-count',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-elements-count', 'df5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-response-status-code',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-response-status-code', '17a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-response-status-code-in-range',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-response-status-code-in-range', '646'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/web-ui-verify-element-not-checked',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/web-ui-verify-element-not-checked', '151'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-accept-alert',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-accept-alert', '5a3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-authenticate',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-authenticate', '5b0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-back',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-back', 'eac'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-check',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-check', '36e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-clear-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-clear-text', '4fe'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click', 'ad2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-image',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-image', '9c1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-offset',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-offset', '7f6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-browser',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-browser', 'df4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-index',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-index', 'd0b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-title',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-title', '42e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-url',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-url', '826'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-delete-all-cookies',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-delete-all-cookies', '2e1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-all-option',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-all-option', '9b3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-option-by-index',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-option-by-index', '907'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-option-by-label',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-option-by-label', '4f2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-option-by-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-option-by-value', '72e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-dismiss-alert',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-dismiss-alert', '30e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-double-click',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-double-click', '386'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-drag-and-drop-by-offset',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-drag-and-drop-by-offset', '08d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-drag-and-drop-to-object',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-drag-and-drop-to-object', '1f5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-enhanced-click',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-enhanced-click', '554'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-execute-javascript',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-execute-javascript', '51b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-find-web-element',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-find-web-element', 'b05'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-find-web-elements',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-find-web-elements', 'dc2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-focus',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-focus', '45c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-forward',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-forward', '5a0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-alert-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-alert-text', 'eae'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-all-links-on-current-page',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-all-links-on-current-page', '75a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-attribute', '96e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-css-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-css-value', '18d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-element-height',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-element-height', '37d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-element-left-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-element-left-position', '7c8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-element-width',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-element-width', 'd0c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-number-of-selected-option',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-number-of-selected-option', '090'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-number-of-total-option',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-number-of-total-option', 'd7a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-page-height',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-page-height', '1a9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-page-width',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-page-width', 'dce'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-text', '1de'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-url',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-url', '57d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-height',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-height', 'c60'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-left-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-left-position', '386'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-top-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-top-position', '3df'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-width',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-width', '132'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-window-index',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-window-index', '510'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-window-title',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-window-title', '8ab'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-maximize-window',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-maximize-window', '193'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-modify-object-property',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-modify-object-property', 'c8f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-mouse-over',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-mouse-over', '08c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-mouse-over-offset',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-mouse-over-offset', '0bd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-navigate-to-url',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-navigate-to-url', 'd42'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-open-browser',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-open-browser', '946'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-refresh',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-refresh', 'bb7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-remove-object-property',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-remove-object-property', 'd3b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-right-click',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-right-click', '090'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-right-click-offset',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-right-click-offset', '21d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-scroll-to-element',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-scroll-to-element', '31f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-scroll-to-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-scroll-to-position', '1b5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-all-option',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-all-option', '585'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-index',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-index', '25b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-label',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-label', '2c0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-value', '4ed'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-send-keys',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-send-keys', '1d5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-alert-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-alert-text', '6b1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-encrypted-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-encrypted-text', 'bb6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-masked-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-masked-text', '36b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-text', '277'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-view-port-size',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-view-port-size', '222'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-submit',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-submit', '84d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-default-content',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-default-content', '14c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-frame',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-frame', 'e40'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-window-index',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-window-index', '308'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-window-title',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-window-title', '7fd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-window-url',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-window-url', '2e9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-area-screenshot',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-area-screenshot', '586'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-element-screenshot',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-element-screenshot', 'f06'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-full-page-screenshot',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-full-page-screenshot', 'b3f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-screenshot',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-screenshot', '7c8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-type-on-image',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-type-on-image', 'a23'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-un-check',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-un-check', '940'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-upload-file',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-upload-file', '805'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-upload-file-by-drag-and-drop',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-upload-file-by-drag-and-drop', '2af'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-alert-not-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-alert-not-present', 'fb0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-alert-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-alert-present', '4bf'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-all-links-on-current-page-accessible',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-all-links-on-current-page-accessible', 'ae7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-attribute-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-attribute-value', '323'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-checked',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-checked', '67b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-clickable',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-clickable', 'b1d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-has-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-has-attribute', '369'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-in-viewport',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-in-viewport', '0c8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-clickable',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-clickable', '148'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-has-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-has-attribute', '56b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-in-viewport',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-in-viewport', '7cc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-present', 'fc4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-visible',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-visible', '6d7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-present', '12e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-text', '12f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-visible',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-visible', '018'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-image-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-image-present', 'ef6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-links-accessible',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-links-accessible', '0b5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-present-by-label',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-present-by-label', '321'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-present-by-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-present-by-value', '7fb'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-selected-by-index',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-selected-by-index', '0ec'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-selected-by-label',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-selected-by-label', 'd5d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-selected-by-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-selected-by-value', '331'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-present-by-label',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-present-by-label', '592'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-present-by-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-present-by-value', '12f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-selected-by-index',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-selected-by-index', 'f52'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-selected-by-label',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-selected-by-label', '9b3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-selected-by-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-selected-by-value', '50f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-options-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-options-present', '9f4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-text-not-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-text-not-present', '3fe'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-text-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-text-present', '9db'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-alert',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-alert', '2fb'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-angular-load',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-angular-load', '4fd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-attribute-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-attribute-value', '52b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-clickable',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-clickable', '13a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-has-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-has-attribute', 'b74'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-clickable',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-clickable', 'ead'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-has-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-has-attribute', '63f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-present', 'ab5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-visible',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-visible', '6c9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-present', 'a86'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-visible',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-visible', '1de'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-image-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-image-present', '743'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-jquery-load',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-jquery-load', 'f24'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-page-load',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-page-load', '9b7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-clear-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-clear-text', '3f6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-click',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-click', 'def'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-click-element-offset',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-click-element-offset', '0ef'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-close-application',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-close-application', 'cd4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-double-click',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-double-click', 'caf'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-find-element',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-find-element', 'd05'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-find-elements',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-find-elements', 'dd8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-attribute',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-attribute', '217'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-driver',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-driver', '8a3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-element-position',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-element-position', '819'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-element-rectangle',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-element-rectangle', '780'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-text', 'f03'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-right-click',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-right-click', 'df3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-right-click-element-offset',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-right-click-element-offset', '4d8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-send-keys',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-send-keys', '5cc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-set-encrypted-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-set-encrypted-text', '0ac'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-set-text',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-set-text', 'a46'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-start-application',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-start-application', '197'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-start-application-with-title',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-start-application-with-title', '4f8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-application',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-application', 'b5c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-desktop',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-desktop', '045'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window', 'b51'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window-title',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window-title', '8d6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-verify-element-attribute-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-verify-element-attribute-value', '120'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-verify-element-not-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-verify-element-not-present', '8b5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-verify-element-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-verify-element-present', '8d2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-wait-for-element-attribute-value',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-wait-for-element-attribute-value', 'b87'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-wait-for-element-not-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-wait-for-element-not-present', '920'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-wait-for-element-present',
        component: ComponentCreator('/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-wait-for-element-present', 'c34'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-alert-dialog-in-mobile-app-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-alert-dialog-in-mobile-app-in-katalon-studio', 'aa3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-drag-and-drop-in-mobile-app-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-drag-and-drop-in-mobile-app-in-katalon-studio', '379'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-horizontal-swipe-in-mobile-automation-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-horizontal-swipe-in-mobile-automation-in-katalon-studio', '35b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-scroll-to-element-in-mobile-automation-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-scroll-to-element-in-mobile-automation-in-katalon-studio', '22e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-spinner-in-mobile-automation-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-spinner-in-mobile-automation-testing-in-katalon-studio', '2be'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-vertical-swipe-in-mobile-automation-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-vertical-swipe-in-mobile-automation-in-katalon-studio', '1c8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/how-to-perform-multi-touch-actions-in-mobile-app-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/how-to-perform-multi-touch-actions-in-mobile-app-in-katalon-studio', 'be0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/performing-pinch-to-zoom-in-action-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/performing-pinch-to-zoom-in-action-in-katalon-studio', '284'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/using-list-to-store-the-mobile-elements-to-validate-data-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/using-list-to-store-the-mobile-elements-to-validate-data-in-katalon-studio', '0aa'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/applitools-integration-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/applitools-integration-in-katalon-studio', '472'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/handling-iframe-issue-with-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/handling-iframe-issue-with-katalon-studio', '4f4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-check-element-status-in-conditional-statement-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-check-element-status-in-conditional-statement-in-katalon-studio', '24b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-alerts-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-alerts-in-katalon-studio', '41a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-dropdown-menu-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-dropdown-menu-in-katalon-studio', '5d5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-file-uploads-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-file-uploads-in-katalon-studio', 'af2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-textbox-checkbox-and-radio-button-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-textbox-checkbox-and-radio-button-in-katalon-studio', 'd3a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-web-tables-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-web-tables-in-katalon-studio', '601'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/solving-pop-up-dialog-issue-with-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/solving-pop-up-dialog-issue-with-katalon-studio', '481'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/solving-wait-time-issue-with-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/solving-wait-time-issue-with-katalon-studio', '675'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/understand-waiting-keywords-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/understand-waiting-keywords-in-katalon-studio', '7c7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/using-autoit-for-authentication-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/using-autoit-for-authentication-in-katalon-studio', '4bf'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/keywords/using-keywords-in-katalon-studio/windows-testing/execute-windows-commands-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/keywords/using-keywords-in-katalon-studio/windows-testing/execute-windows-commands-in-katalon-studio', 'c35'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/manage-test-projects/create-a-test-project-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/manage-test-projects/create-a-test-project-in-katalon-studio', '1a6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/manage-test-projects/manage-test-project-in-katalon-studio-overview',
        component: ComponentCreator('/docs/create-tests/manage-projects/manage-test-projects/manage-test-project-in-katalon-studio-overview', 'bba'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/manage-test-projects/open-a-test-project-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/manage-test-projects/open-a-test-project-in-katalon-studio', 'eda'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/manage-test-projects/open-a-test-project-in-katalon-studio---platform-edition',
        component: ComponentCreator('/docs/create-tests/manage-projects/manage-test-projects/open-a-test-project-in-katalon-studio---platform-edition', '17a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/manage-test-projects/refresh-clean-up-and-delete-a-test-project-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/manage-test-projects/refresh-clean-up-and-delete-a-test-project-in-katalon-studio', 'fc3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/install-chrome-extensions-at-runtime-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/install-chrome-extensions-at-runtime-in-katalon-studio', 'ce2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio', '65d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/manage-androids-permission-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/manage-androids-permission-in-katalon-studio', 'd85'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/manage-desired-capabilities-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/manage-desired-capabilities-in-katalon-studio', '755'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio', 'eac'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/remote-execution-for-mobile-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/remote-execution-for-mobile-testing-in-katalon-studio', '5b3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/selenium-grid---execution-on-remote-machines-with-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/selenium-grid---execution-on-remote-machines-with-katalon-studio', '838'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-custom-desired-capabilities-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-custom-desired-capabilities-in-katalon-studio', 'c5d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-for-webui-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-for-webui-testing-in-katalon-studio', '6ae'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-in-mobile-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-in-mobile-testing-in-katalon-studio', '207'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-in-windows-desktop-app-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-in-windows-desktop-app-testing-in-katalon-studio', '16e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-remote-server-in-desired-capabilities-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-remote-server-in-desired-capabilities-in-katalon-studio', '763'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/start-browsers-in-private-mode-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/start-browsers-in-private-mode-in-katalon-studio', '056'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/desired-capabilities/test-different-browser-locales-in-chrome-with-desired-capabilities-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/desired-capabilities/test-different-browser-locales-in-chrome-with-desired-capabilities-in-katalon-studio', 'c5b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/git-integration/git-integration-authentication-with-ssh-keys-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/git-integration/git-integration-authentication-with-ssh-keys-in-katalon-studio', 'c0f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/git-integration/git-integration-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/git-integration/git-integration-in-katalon-studio', '023'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio', '84a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio---platform-edition',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/git-integration/work-with-git-in-katalon-studio---platform-edition', 'b22'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/katalon-studio-project-settings-overview',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/katalon-studio-project-settings-overview', '0c7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/library-management-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/library-management-in-katalon-studio', '161'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/network-settings-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/network-settings-in-katalon-studio', '6a2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/set-desired-execution-behaviors-of-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/set-desired-execution-behaviors-of-katalon-studio', '563'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/project-settings/view-and-edit-your-project-information-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/project-settings/view-and-edit-your-project-information-in-katalon-studio', '2a1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/api-testing/configure-linux-for-web-service-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/api-testing/configure-linux-for-web-service-testing-in-katalon-studio', '919'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/api-testing/use-client-certificate-for-requests-in-api-projects-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/api-testing/use-client-certificate-for-requests-in-api-projects-in-katalon-studio', '46c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/configure-fingerprint-setting-in-an-android-emulator',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/configure-fingerprint-setting-in-an-android-emulator', 'eab'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-android-setup-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-android-setup-in-katalon-studio', '804'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-configure-android-studio-emulator-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-configure-android-studio-emulator-in-katalon-studio', 'e15'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/use-the-keyboard-keys-while-automating-android-apps',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/use-the-keyboard-keys-while-automating-android-apps', 'b51'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-install-webdriveragent-for-real-ios-devices-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-install-webdriveragent-for-real-ios-devices-in-katalon-studio', '329'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-ios-setup-simulators-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-ios-setup-simulators-in-katalon-studio', '502'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-set-up-real-ios-devices-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-set-up-real-ios-devices-in-katalon-studio', 'd45'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/perform-touch-id-with-ios-device-simulator',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/perform-touch-id-with-ios-device-simulator', 'd2e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/mobile-image-based-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/mobile-image-based-testing-in-katalon-studio', 'e9b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/reduce-execution-time-in-mobile-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/reduce-execution-time-in-mobile-testing-in-katalon-studio', 'b1f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/retrieve-mobiles-session-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/retrieve-mobiles-session-in-katalon-studio', '15e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-custom-cloud-devices-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-custom-cloud-devices-in-katalon-studio', '24a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm', '031'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-web-app-on-mobile-browsers-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-web-app-on-mobile-browsers-in-katalon-studio', 'ef7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/handle-webdrivers-with-eventfiringwebdriver-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/handle-webdrivers-with-eventfiringwebdriver-in-katalon-studio', '2d4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/terminate-webdrivers-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/terminate-webdrivers-in-katalon-studio', 'd65'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio', '660'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/web-testing/internet-explorer-configurations-for-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/web-testing/internet-explorer-configurations-for-katalon-studio', '82d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/windows-desktop-apps-testing/katalon-with-winium-for-desktop-applications-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/windows-desktop-apps-testing/katalon-with-winium-for-desktop-applications-in-katalon-studio', '296'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-projects/set-up-projects/windows-desktop-apps-testing/set-up-winappdriver-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-projects/set-up-projects/windows-desktop-apps-testing/set-up-winappdriver-in-katalon-studio', '9a4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-test-artifacts/test-artifacts-sharing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-test-artifacts/test-artifacts-sharing-in-katalon-studio', 'c9b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-test-artifacts/using-git-submodules-to-share-test-artifacts-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-test-artifacts/using-git-submodules-to-share-test-artifacts-in-katalon-studio', 'ecb'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/manage-test-artifacts/working-with-bdd-feature-files-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/manage-test-artifacts/working-with-bdd-feature-files-in-katalon-studio', '3c0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/generate-test-scripts-for-a-progressive-web-app-using-mobile-recorder-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/generate-test-scripts-for-a-progressive-web-app-using-mobile-recorder-in-katalon-studio', '0df'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/hybrid-mobile-apps-testing/capture-elements-in-hybrid-android-apps-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/hybrid-mobile-apps-testing/capture-elements-in-hybrid-android-apps-in-katalon-studio', 'd72'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/hybrid-mobile-apps-testing/hybrid-mobile-apps-testing-in-katalon-studio-overview',
        component: ComponentCreator('/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/hybrid-mobile-apps-testing/hybrid-mobile-apps-testing-in-katalon-studio-overview', '850'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/introduction-to-mobile-recorder-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/introduction-to-mobile-recorder-in-katalon-studio', '842'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/record-mobile-utility-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/record-mobile-utility-in-katalon-studio', 'f31'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/spy-and-record-utilities-for-testing-an-existing-application-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/spy-and-record-utilities-for-testing-an-existing-application-in-katalon-studio', '84a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/spy-mobile-utility-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/spy-mobile-utility-in-katalon-studio', 'b10'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/create-test-case-with-record-and-playback-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/create-test-case-with-record-and-playback-in-katalon-studio', 'a82'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/how-to-use-synchronization-commands-while-recording-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/how-to-use-synchronization-commands-while-recording-in-katalon-studio', 'b9d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/katalon-compact-utility-for-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/katalon-compact-utility-for-katalon-studio', 'e02'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/record-web-utility-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/record-web-utility-in-katalon-studio', 'd7d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/smart-wait-function',
        component: ComponentCreator('/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/smart-wait-function', '1aa'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/spy-web-utility-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/spy-web-utility-in-katalon-studio', '852'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/capture-windows-objects-using-the-windows-spy-utility-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/capture-windows-objects-using-the-windows-spy-utility-in-katalon-studio', 'efb'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/native-windows-recorder-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/native-windows-recorder-in-katalon-studio', 'c51'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-tutorials-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-tutorials-in-katalon-studio', '31c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-utility-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-utility-in-katalon-studio', '14a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-spy-utility-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-spy-utility-in-katalon-studio', '0d3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/authorization/authorization-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/authorization/authorization-in-katalon-studio', '360'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/authorization/authorization-oauth-1.0-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/authorization/authorization-oauth-1.0-in-katalon-studio', '27e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/authorization/authorization-oauth-2.0-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/authorization/authorization-oauth-2.0-in-katalon-studio', '1d5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/authorization/basic-authentication-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/authorization/basic-authentication-in-katalon-studio', '5b2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/authorization/bearer-authentication-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/authorization/bearer-authentication-in-katalon-studio', 'e69'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/authorization/ntlm-authentication-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/authorization/ntlm-authentication-in-katalon-studio', 'a6a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/create-web-service-object-in-katalon-studio-script-mode',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/create-web-service-object-in-katalon-studio-script-mode', 'ad3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/draft-request-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/draft-request-in-katalon-studio', '3ea'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/graphql-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/graphql-in-katalon-studio', '477'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/handle-response-messages-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/handle-response-messages-in-katalon-studio', 'b73'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-rest-api-with-openapi-specification-3.0-to-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-rest-api-with-openapi-specification-3.0-to-katalon-studio', '8f7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-restful-from-postman-to-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-restful-from-postman-to-katalon-studio', 'e70'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-restful-requests-from-swagger-2.0',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-restful-requests-from-swagger-2.0', 'bd0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-restful-requests-from-wadls-to-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-restful-requests-from-wadls-to-katalon-studio', 'fe1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-soap-requests-from-wsdls-to-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-soap-requests-from-wsdls-to-katalon-studio', 'e8b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-web-service-requests-from-soapui-to-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-web-service-requests-from-soapui-to-katalon-studio', 'fd7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/introduction-to-web-services-test-object-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/introduction-to-web-services-test-object-in-katalon-studio', '2c0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/request-history-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/request-history-in-katalon-studio', 'd1e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/rest-request/create-rest-api-requests-manually-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/rest-request/create-rest-api-requests-manually-in-katalon-studio', 'ea1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/rest-request/parameterize-a-web-service-object-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/rest-request/parameterize-a-web-service-object-in-katalon-studio', '9b7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/rest-request/rest-request-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/rest-request/rest-request-in-katalon-studio', '460'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/schema-compliance-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/schema-compliance-testing-in-katalon-studio', 'f34'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/soap-request-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/soap-request-in-katalon-studio', '464'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/verification-snippets-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/verification-snippets-in-katalon-studio', 'a1f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/api-test-objects/web-services-builder-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/api-test-objects/web-services-builder-in-katalon-studio', 'ff4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/mobile-test-objects/find-the-locator-of-a-mobile-application-element',
        component: ComponentCreator('/docs/create-tests/test-objects/mobile-test-objects/find-the-locator-of-a-mobile-application-element', 'b11'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/mobile-test-objects/locators-and-object-identification-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/mobile-test-objects/locators-and-object-identification-in-katalon-studio', 'f8b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/mobile-test-objects/manage-mobile-test-objects-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/mobile-test-objects/manage-mobile-test-objects-in-katalon-studio', 'fb4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/mobile-test-objects/parameterize-mobile-test-object-properties-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/mobile-test-objects/parameterize-mobile-test-object-properties-in-katalon-studio', '8e9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/web-test-objects/automation-testing-of-shadow-dom-elements-with-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/web-test-objects/automation-testing-of-shadow-dom-elements-with-katalon-studio', '6e8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/web-test-objects/detecting-objects-with-xpath-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/web-test-objects/detecting-objects-with-xpath-in-katalon-studio', '80f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/web-test-objects/generating-reliable-object-selector-using-spy-web-utility-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/web-test-objects/generating-reliable-object-selector-using-spy-web-utility-in-katalon-studio', '34c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/web-test-objects/handling-web-element-locators-using-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/web-test-objects/handling-web-element-locators-using-katalon-studio', '32e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/web-test-objects/manage-web-test-objects-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/web-test-objects/manage-web-test-objects-in-katalon-studio', '4c0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/web-test-objects/optimizing-object-identification-and-tools-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/web-test-objects/optimizing-object-identification-and-tools-in-katalon-studio', 'b4b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/web-test-objects/parameterize-web-test-objects-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/web-test-objects/parameterize-web-test-objects-in-katalon-studio', '372'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/web-test-objects/selection-methods-for-web-objects-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/web-test-objects/selection-methods-for-web-objects-in-katalon-studio', '52a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio', '8f6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/test-objects/windows-test-objects/windows-test-objects-in-katalon-studio',
        component: ComponentCreator('/docs/create-tests/test-objects/windows-test-objects/windows-test-objects-in-katalon-studio', 'a30'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/known-issues-and-limitations',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/known-issues-and-limitations', '3a4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/troubleshoot-common-exceptions-for-test-creation',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/troubleshoot-common-exceptions-for-test-creation', '97e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/unable-to-open-project-resource-exception',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/unable-to-open-project-resource-exception', '9d4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/unable-to-open-projects-in-katalon-studio---platform-edition',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/unable-to-open-projects-in-katalon-studio---platform-edition', '52d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/unable-to-open-recent-projects-in-katalon-studio---platform-edition',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/unable-to-open-recent-projects-in-katalon-studio---platform-edition', '14f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/an-unknown-server-side-error-occurred-while-processing-the-command',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/an-unknown-server-side-error-occurred-while-processing-the-command', '458'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/appium-directory-is-not-set',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/appium-directory-is-not-set', '5d3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/carthage-is-not-found',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/carthage-is-not-found', 'f98'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/connected-device-not-displayed-in-device-name-list',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/connected-device-not-displayed-in-device-name-list', '59a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/encounter-xcodebuild-exited-with-code-65-and-signal-null',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/encounter-xcodebuild-exited-with-code-65-and-signal-null', '172'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/fail-to-start-appium-server-in-30-seconds',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/fail-to-start-appium-server-in-30-seconds', '143'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/fail-to-start-the-appium-server-in-60-seconds',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/fail-to-start-the-appium-server-in-60-seconds', 'c4c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/katalon-mobile-recorder-and-settext-keyword-cannot-perform-on-an-edittext-element-of-the-flutter-based-application',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/katalon-mobile-recorder-and-settext-keyword-cannot-perform-on-an-edittext-element-of-the-flutter-based-application', 'bcf'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/no-chromedriver-found-that-can-automate-chrome-chrome_version',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/no-chromedriver-found-that-can-automate-chrome-chrome_version', 'e9b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/troubleshooting-automated-mobile-testing-overview',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/troubleshooting-automated-mobile-testing-overview', 'd58'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-create-a-new-remote-session-with-ios-real-devices',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-create-a-new-remote-session-with-ios-real-devices', '3ff'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application', '9a0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application-on-this-device-appium-directory-is-invalid',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application-on-this-device-appium-directory-is-invalid', '9a5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application-while-running-android-tests-on-a-windows-machine',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application-while-running-android-tests-on-a-windows-machine', '8cc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/xcode-fails-to-create-a-provisioning-profile-for-the-webdriveragentrunner-target',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/xcode-fails-to-create-a-provisioning-profile-for-the-webdriveragentrunner-target', 'efa'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/element-click-intercepted-exception',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/element-click-intercepted-exception', '2be'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/element-not-visible-exception',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/element-not-visible-exception', '9f2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/firefox-browser-alert-is-not-getting-popped-up',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/firefox-browser-alert-is-not-getting-popped-up', '043'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/invalid-element-state-exception',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/invalid-element-state-exception', 'bb5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/timed-out-waiting-for-the-driver-server-to-start',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/timed-out-waiting-for-the-driver-server-to-start', '85b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/troubleshoot-web-test-execution-exceptions-overview',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/troubleshoot-web-test-execution-exceptions-overview', '734'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/unable-to-connect-to-katalon-server',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/unable-to-connect-to-katalon-server', 'bb6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/unable-to-record-on-internet-explorer',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/unable-to-record-on-internet-explorer', 'ec1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/use-different-browser-versions',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/use-different-browser-versions', '418'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/web-element-not-found-exception',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/web-element-not-found-exception', '087'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/webdriver-exception-element-is-not-clickable-at-point-x-y',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/webdriver-exception-element-is-not-clickable-at-point-x-y', '9bf'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/the-sendkeys-keyword-did-not-send-the-correct-text-with-german-keyboard-as-default-settings',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/the-sendkeys-keyword-did-not-send-the-correct-text-with-german-keyboard-as-default-settings', 'd0e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/timeout-when-launching-windows-application',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/timeout-when-launching-windows-application', 'df9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/troubleshoot-windows-automated-testing-overview',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/troubleshoot-windows-automated-testing-overview', '59d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/unable-to-start-the-windows-application',
        component: ComponentCreator('/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/unable-to-start-the-windows-application', 'e89'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/customer-support-faqs',
        component: ComponentCreator('/docs/customer-support-faqs', 'd52'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/aws-codebuild-integration',
        component: ComponentCreator('/docs/execute/cicd-integrations/aws-codebuild-integration', '1c0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/azure-devops-integration',
        component: ComponentCreator('/docs/execute/cicd-integrations/azure-devops-integration', '6d3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/bamboo-add-on',
        component: ComponentCreator('/docs/execute/cicd-integrations/bamboo-add-on', 'a7c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/cicd-integration-overview',
        component: ComponentCreator('/docs/execute/cicd-integrations/cicd-integration-overview', '43a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/circleci---katalon-orb',
        component: ComponentCreator('/docs/execute/cicd-integrations/circleci---katalon-orb', '6fd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/gitlab-integration',
        component: ComponentCreator('/docs/execute/cicd-integrations/gitlab-integration', '8b7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/google-cloud-build',
        component: ComponentCreator('/docs/execute/cicd-integrations/google-cloud-build', 'd48'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/harness-integration',
        component: ComponentCreator('/docs/execute/cicd-integrations/harness-integration', '06a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/jenkins-integration/execute-katalon-studio-tests-with-jenkins-pipeline-script-jenkinsfile',
        component: ComponentCreator('/docs/execute/cicd-integrations/jenkins-integration/execute-katalon-studio-tests-with-jenkins-pipeline-script-jenkinsfile', '939'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/jenkins-integration/execute-katalon-tests-on-jenkins-with-testcloud-environment',
        component: ComponentCreator('/docs/execute/cicd-integrations/jenkins-integration/execute-katalon-tests-on-jenkins-with-testcloud-environment', 'e5f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/jenkins-integration/jenkins-integration-overview',
        component: ComponentCreator('/docs/execute/cicd-integrations/jenkins-integration/jenkins-integration-overview', 'cd5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/jenkins-integration/passing-scenario-tags-at-runtime-when-building-with-jenkins',
        component: ComponentCreator('/docs/execute/cicd-integrations/jenkins-integration/passing-scenario-tags-at-runtime-when-building-with-jenkins', '037'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-on-docker-hosted-in-ubuntu',
        component: ComponentCreator('/docs/execute/cicd-integrations/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-on-docker-hosted-in-ubuntu', '5a9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-pipeline-jenkinsfile-with-katalon-studio-docker-image',
        component: ComponentCreator('/docs/execute/cicd-integrations/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-pipeline-jenkinsfile-with-katalon-studio-docker-image', '5be'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/integrate-jenkins-with-testops',
        component: ComponentCreator('/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/integrate-jenkins-with-testops', '049'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-ubuntu',
        component: ComponentCreator('/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-ubuntu', '87f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windowsmacos',
        component: ComponentCreator('/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windowsmacos', '5ed'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/katalon-studio-github-action',
        component: ComponentCreator('/docs/execute/cicd-integrations/katalon-studio-github-action', '5b9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/cicd-integrations/teamcity-plugin',
        component: ComponentCreator('/docs/execute/cicd-integrations/teamcity-plugin', 'bb8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/configurations-for-test-execution/specify-a-path-to-android-sdk-root-folder',
        component: ComponentCreator('/docs/execute/configurations-for-test-execution/specify-a-path-to-android-sdk-root-folder', '490'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/configurations-for-test-execution/terminate-execution-conditionally',
        component: ComponentCreator('/docs/execute/configurations-for-test-execution/terminate-execution-conditionally', 'd79'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/integration-with-other-vendors/app-center-integration',
        component: ComponentCreator('/docs/execute/integration-with-other-vendors/app-center-integration', '686'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/integration-with-other-vendors/aws-device-farm-integration',
        component: ComponentCreator('/docs/execute/integration-with-other-vendors/aws-device-farm-integration', '8e2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/integration-with-other-vendors/browserstack-integration',
        component: ComponentCreator('/docs/execute/integration-with-other-vendors/browserstack-integration', 'aa2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/integration-with-other-vendors/kobiton-integration/kobiton-integration-with-katalon-studio',
        component: ComponentCreator('/docs/execute/integration-with-other-vendors/kobiton-integration/kobiton-integration-with-katalon-studio', 'ba2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/integration-with-other-vendors/kobiton-integration/kobiton-integration-with-testops',
        component: ComponentCreator('/docs/execute/integration-with-other-vendors/kobiton-integration/kobiton-integration-with-testops', '782'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/integration-with-other-vendors/lambdatest-integration',
        component: ComponentCreator('/docs/execute/integration-with-other-vendors/lambdatest-integration', '827'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/integration-with-other-vendors/sauce-labs-integration',
        component: ComponentCreator('/docs/execute/integration-with-other-vendors/sauce-labs-integration', '483'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine',
        component: ComponentCreator('/docs/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine', '518'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/katalon-runtime-engine/create-dynamic-test-suite-at-runtime',
        component: ComponentCreator('/docs/execute/katalon-runtime-engine/create-dynamic-test-suite-at-runtime', 'e5f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/katalon-runtime-engine/get-started-with-katalon-runtime-engine',
        component: ComponentCreator('/docs/execute/katalon-runtime-engine/get-started-with-katalon-runtime-engine', '35d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/katalon-runtime-engine/katalon-docker-image',
        component: ComponentCreator('/docs/execute/katalon-runtime-engine/katalon-docker-image', 'e9e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/katalon-runtime-engine/katalon-runtime-engine-overview',
        component: ComponentCreator('/docs/execute/katalon-runtime-engine/katalon-runtime-engine-overview', '315'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/schedule-test-execution/cancel-scheduled-test-runs-in-testops',
        component: ComponentCreator('/docs/execute/schedule-test-execution/cancel-scheduled-test-runs-in-testops', 'ddd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/schedule-test-execution/execute-test-runs-manually-in-testops',
        component: ComponentCreator('/docs/execute/schedule-test-execution/execute-test-runs-manually-in-testops', 'f8f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/schedule-test-execution/schedule-test-runs-in-testops',
        component: ComponentCreator('/docs/execute/schedule-test-execution/schedule-test-runs-in-testops', 'e1b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/schedule-test-execution/test-suite-collection-scheduler-for-katalon-studio',
        component: ComponentCreator('/docs/execute/schedule-test-execution/test-suite-collection-scheduler-for-katalon-studio', 'f1b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-overview',
        component: ComponentCreator('/docs/execute/test-execution-overview', '998'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-katalon-studio/execute-a-test-case',
        component: ComponentCreator('/docs/execute/test-execution-with-katalon-studio/execute-a-test-case', '395'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-katalon-studio/execute-a-test-suite-in-katalon-studio',
        component: ComponentCreator('/docs/execute/test-execution-with-katalon-studio/execute-a-test-suite-in-katalon-studio', 'c2d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-katalon-studio/execute-dynamic-test-suites-in-katalon-studio',
        component: ComponentCreator('/docs/execute/test-execution-with-katalon-studio/execute-dynamic-test-suites-in-katalon-studio', '08e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-katalon-studio/execute-test-suite-collections-in-katalon-studio',
        component: ComponentCreator('/docs/execute/test-execution-with-katalon-studio/execute-test-suite-collections-in-katalon-studio', '5e4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-katalon-studio/execute-tests-with-katalon-studio-overview',
        component: ComponentCreator('/docs/execute/test-execution-with-katalon-studio/execute-tests-with-katalon-studio-overview', '98e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-katalon-studio/headless-browsers-execution-in-katalon-studio',
        component: ComponentCreator('/docs/execute/test-execution-with-katalon-studio/headless-browsers-execution-in-katalon-studio', '48c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-katalon-studio/skip-test-cases-in-katalon-studio',
        component: ComponentCreator('/docs/execute/test-execution-with-katalon-studio/skip-test-cases-in-katalon-studio', '081'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testcloud/override-test-environments-in-a-test-suite-collection',
        component: ComponentCreator('/docs/execute/test-execution-with-testcloud/override-test-environments-in-a-test-suite-collection', '35a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testcloud/run-mobile-native-application-tests-on-testcloud',
        component: ComponentCreator('/docs/execute/test-execution-with-testcloud/run-mobile-native-application-tests-on-testcloud', 'b3c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testcloud/run-tests-in-private-domains-with-testcloud',
        component: ComponentCreator('/docs/execute/test-execution-with-testcloud/run-tests-in-private-domains-with-testcloud', 'f1e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testcloud/run-tests-on-mobile-browsers-with-testcloud',
        component: ComponentCreator('/docs/execute/test-execution-with-testcloud/run-tests-on-mobile-browsers-with-testcloud', 'ae7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testcloud/set-desired-capabilities-for-testcloud-environment',
        component: ComponentCreator('/docs/execute/test-execution-with-testcloud/set-desired-capabilities-for-testcloud-environment', 'b46'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testcloud/testcloud-overview',
        component: ComponentCreator('/docs/execute/test-execution-with-testcloud/testcloud-overview', '214'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testcloud/testcloud-tunnel',
        component: ComponentCreator('/docs/execute/test-execution-with-testcloud/testcloud-tunnel', '753'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testcloud/use-testcloud-in-katalon-runtime-engine',
        component: ComponentCreator('/docs/execute/test-execution-with-testcloud/use-testcloud-in-katalon-runtime-engine', 'a02'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testcloud/use-testcloud-in-katalon-studio',
        component: ComponentCreator('/docs/execute/test-execution-with-testcloud/use-testcloud-in-katalon-studio', 'b8b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testcloud/use-testcloud-in-testops',
        component: ComponentCreator('/docs/execute/test-execution-with-testcloud/use-testcloud-in-testops', 'b4b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testops/local-test-environments/auto-distributed-executions',
        component: ComponentCreator('/docs/execute/test-execution-with-testops/local-test-environments/auto-distributed-executions', 'f11'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testops/local-test-environments/create-a-local-test-environment-with-an-agent',
        component: ComponentCreator('/docs/execute/test-execution-with-testops/local-test-environments/create-a-local-test-environment-with-an-agent', '460'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testops/local-test-environments/load-balancing-for-local-test-environments',
        component: ComponentCreator('/docs/execute/test-execution-with-testops/local-test-environments/load-balancing-for-local-test-environments', 'c7c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testops/local-test-environments/run-multiple-test-suites-in-parallel-with-agents',
        component: ComponentCreator('/docs/execute/test-execution-with-testops/local-test-environments/run-multiple-test-suites-in-parallel-with-agents', 'c3f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testops/set-up-circleci-test-environments-for-testops',
        component: ComponentCreator('/docs/execute/test-execution-with-testops/set-up-circleci-test-environments-for-testops', '1d6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testops/set-up-docker-test-environments-for-testops',
        component: ComponentCreator('/docs/execute/test-execution-with-testops/set-up-docker-test-environments-for-testops', '11c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testops/set-up-kubernetes-test-environments-for-testops',
        component: ComponentCreator('/docs/execute/test-execution-with-testops/set-up-kubernetes-test-environments-for-testops', '4cf'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/test-execution-with-testops/test-execution-with-testops',
        component: ComponentCreator('/docs/execute/test-execution-with-testops/test-execution-with-testops', '930'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/troubleshooting/how-to-free-up-more-available-ram-for-katalon-studio',
        component: ComponentCreator('/docs/execute/troubleshooting/how-to-free-up-more-available-ram-for-katalon-studio', '955'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/troubleshooting/illegal-option-specification-exception',
        component: ComponentCreator('/docs/execute/troubleshooting/illegal-option-specification-exception', '113'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/troubleshooting/local-agent-doesnt-trigger-automatically-from-cmd',
        component: ComponentCreator('/docs/execute/troubleshooting/local-agent-doesnt-trigger-automatically-from-cmd', '2a1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/troubleshooting/new-and-old-proxy-mechanisms-are-not-allowed-in-one-command',
        component: ComponentCreator('/docs/execute/troubleshooting/new-and-old-proxy-mechanisms-are-not-allowed-in-one-command', '09d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows',
        component: ComponentCreator('/docs/execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows', '9e0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/troubleshooting/troubleshooting-common-execution-issues',
        component: ComponentCreator('/docs/execute/troubleshooting/troubleshooting-common-execution-issues', '4ac'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/troubleshooting/unable-to-execute-tests-on-localhost-with-testcloud-tunnel',
        component: ComponentCreator('/docs/execute/troubleshooting/unable-to-execute-tests-on-localhost-with-testcloud-tunnel', '2d4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/execute/troubleshooting/unable-to-execute-the-current-selected-test-case',
        component: ComponentCreator('/docs/execute/troubleshooting/unable-to-execute-the-current-selected-test-case', '8ce'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/get-started-with-katalon-platform',
        component: ComponentCreator('/docs/get-started/get-started-with-katalon-platform', 'b14'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/katalon-studio-installation/install-katalon-studio-for-linux-gui',
        component: ComponentCreator('/docs/get-started/katalon-studio-installation/install-katalon-studio-for-linux-gui', 'bbc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/katalon-studio-installation/install-katalon-studio-on-macoswindows',
        component: ComponentCreator('/docs/get-started/katalon-studio-installation/install-katalon-studio-on-macoswindows', '436'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/katalon-studio-installation/katalon-studio-installation-overview',
        component: ComponentCreator('/docs/get-started/katalon-studio-installation/katalon-studio-installation-overview', '082'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/migration-from-other-tools/import-selenium-ide-version-3-projects-to-katalon-studio',
        component: ComponentCreator('/docs/get-started/migration-from-other-tools/import-selenium-ide-version-3-projects-to-katalon-studio', '106'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/migration-from-other-tools/seleniumtestngjunit-migration-to-katalon-studio',
        component: ComponentCreator('/docs/get-started/migration-from-other-tools/seleniumtestngjunit-migration-to-katalon-studio', '27d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/onboarding-katalon-platform/explore-katalon-studio',
        component: ComponentCreator('/docs/get-started/onboarding-katalon-platform/explore-katalon-studio', 'a78'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/onboarding-katalon-platform/katalon-studio-best-practices',
        component: ComponentCreator('/docs/get-started/onboarding-katalon-platform/katalon-studio-best-practices', '91f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/onboarding-katalon-platform/quick-guide-for-administrators',
        component: ComponentCreator('/docs/get-started/onboarding-katalon-platform/quick-guide-for-administrators', '0ff'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/onboarding-katalon-platform/quick-guide-for-billing-managers',
        component: ComponentCreator('/docs/get-started/onboarding-katalon-platform/quick-guide-for-billing-managers', 'd12'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/onboarding-katalon-platform/quick-guide-for-qa-managers',
        component: ComponentCreator('/docs/get-started/onboarding-katalon-platform/quick-guide-for-qa-managers', 'a4e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/onboarding-katalon-platform/quick-guide-for-testers',
        component: ComponentCreator('/docs/get-started/onboarding-katalon-platform/quick-guide-for-testers', 'eb8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/api/sample-api-tests-project-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/sample-projects/api/sample-api-tests-project-in-katalon-studio', '73e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/behavior-driven-development/sample-bdd-cucumber-tests-project-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/sample-projects/behavior-driven-development/sample-bdd-cucumber-tests-project-in-katalon-studio', '60f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/data-driven-test/sample-webui-tests-project-with-data-driven-testing-shopping-cart-sample-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/sample-projects/data-driven-test/sample-webui-tests-project-with-data-driven-testing-shopping-cart-sample-in-katalon-studio', '63e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/mobile/mobile-create-and-run-android-test-case',
        component: ComponentCreator('/docs/get-started/sample-projects/mobile/mobile-create-and-run-android-test-case', '235'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/mobile/mobile-create-and-run-ios-test-case-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/sample-projects/mobile/mobile-create-and-run-ios-test-case-in-katalon-studio', '55c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/mobile/sample-android-mobile-tests-project-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/sample-projects/mobile/sample-android-mobile-tests-project-in-katalon-studio', '4ac'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/mobile/sample-ios-mobile-tests-project-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/sample-projects/mobile/sample-ios-mobile-tests-project-in-katalon-studio', '55e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/sample-projects-overview',
        component: ComponentCreator('/docs/get-started/sample-projects/sample-projects-overview', '1e1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/webui/sample-webui-tests-project-healthcare-sample-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/sample-projects/webui/sample-webui-tests-project-healthcare-sample-in-katalon-studio', '7e5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/webui/webui-analyze-test-execution-logs-and-debug-the-test-case-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/sample-projects/webui/webui-analyze-test-execution-logs-and-debug-the-test-case-in-katalon-studio', '6ae'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/webui/webui-analyze-test-suite-reports-and-resolve-errors-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/sample-projects/webui/webui-analyze-test-suite-reports-and-resolve-errors-in-katalon-studio', '077'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio', 'ea9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/sample-projects/webui/webui-plan-test-suite',
        component: ComponentCreator('/docs/get-started/sample-projects/webui/webui-plan-test-suite', 'ba6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/change-katalon-studio-theme',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/change-katalon-studio-theme', '948'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/configure-key-bindings-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/configure-key-bindings-in-katalon-studio', '35b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/integrate-katalon-testops-and-katalon-testcloud-with-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/integrate-katalon-testops-and-katalon-testcloud-with-katalon-studio', '8cf'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/katalon-help-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/katalon-help-in-katalon-studio', 'ee7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/katalon-studio-preferences/configure-proxy-preferences-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/katalon-studio-preferences/configure-proxy-preferences-in-katalon-studio', '459'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/katalon-studio-preferences/import-preferences-to-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/katalon-studio-preferences/import-preferences-to-katalon-studio', '60c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/katalon-studio-preferences/mobile-preferences-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/katalon-studio-preferences/mobile-preferences-in-katalon-studio', '77a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/katalon-studio-preferences/object-spy-preferences-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/katalon-studio-preferences/object-spy-preferences-in-katalon-studio', '542'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/katalon-studio-preferences/preferences-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/katalon-studio-preferences/preferences-in-katalon-studio', '6f8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/katalon-studio-preferences/set-a-new-default-jre-for-test-projects-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/katalon-studio-preferences/set-a-new-default-jre-for-test-projects-in-katalon-studio', 'c73'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/katalon-studio-preferences/test-case-preferences-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/katalon-studio-preferences/test-case-preferences-in-katalon-studio', '869'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/keyboard-shortcuts-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/keyboard-shortcuts-in-katalon-studio', 'e3d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/set-up-overview-in-katalon-platform',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/set-up-overview-in-katalon-platform', '016'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/toolbars-and-views-in-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/toolbars-and-views-in-katalon-studio', '0a9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/set-up-your-workspace/update-katalon-studio',
        component: ComponentCreator('/docs/get-started/set-up-your-workspace/update-katalon-studio', 'da3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/get-started/terminology-and-formulas',
        component: ComponentCreator('/docs/get-started/terminology-and-formulas', '955'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/supported-integrations/supported-integrations-in-katalon-platform',
        component: ComponentCreator('/docs/integrations/supported-integrations/supported-integrations-in-katalon-platform', '362'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/accessibility-test-automation-in-katalon-studio',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/accessibility-test-automation-in-katalon-studio', 'e74'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/canvas-automation',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/canvas-automation', 'f96'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/cypress-integration',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/cypress-integration', '84e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/katalon-studio---pcloudy-integration',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/katalon-studio---pcloudy-integration', '798'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/microsoft-dynamics-365',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/microsoft-dynamics-365', 'a9f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/oracle-cloud-application-testing',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/oracle-cloud-application-testing', '62f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/otp-use-cases',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/otp-use-cases', 'd57'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/performance-testing-katalon-and-octoperf',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/performance-testing-katalon-and-octoperf', '18d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/playwright-integration',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/playwright-integration', '950'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/powerbi-integration',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/powerbi-integration', '2e7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/qr-code-scanning-automation',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/qr-code-scanning-automation', '6a5'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/salesforce-testing',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/salesforce-testing', '4fa'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/selenium-katalon-migration',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/selenium-katalon-migration', '282'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/testproject-migration',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/testproject-migration', 'b40'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/upload-files-for-web-applications',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/upload-files-for-web-applications', 'a61'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/wiremock-integration',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/wiremock-integration', '10a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/integrations/unsupported-integrations/zephyr-scale',
        component: ComponentCreator('/docs/integrations/unsupported-integrations/zephyr-scale', 'ec1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/maintain/auto-healing-smart-xpath-in-katalon-studio',
        component: ComponentCreator('/docs/maintain/auto-healing-smart-xpath-in-katalon-studio', 'eef'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/maintain/configure-class-file-decompilation-in-katalon-studio',
        component: ComponentCreator('/docs/maintain/configure-class-file-decompilation-in-katalon-studio', 'cec'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/maintain/configure-failure-handling-settings-in-katalon-studio',
        component: ComponentCreator('/docs/maintain/configure-failure-handling-settings-in-katalon-studio', '2e8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/maintain/fix-broken-web-test-objects-with-time-capsule-in-katalon-studio',
        component: ComponentCreator('/docs/maintain/fix-broken-web-test-objects-with-time-capsule-in-katalon-studio', 'b0b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/maintain/introduction-to-test-maintenance',
        component: ComponentCreator('/docs/maintain/introduction-to-test-maintenance', '81d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/maintain/refactor-test-objects-in-katalon-studio',
        component: ComponentCreator('/docs/maintain/refactor-test-objects-in-katalon-studio', 'fa0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/maintain/self-healing-tests-in-katalon-studio',
        component: ComponentCreator('/docs/maintain/self-healing-tests-in-katalon-studio', '458'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/maintain/suggested-solutions-for-keyword-errors',
        component: ComponentCreator('/docs/maintain/suggested-solutions-for-keyword-errors', '8ee'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/custom-field-and-tags/custom-fields-and-tags',
        component: ComponentCreator('/docs/organize/custom-field-and-tags/custom-fields-and-tags', 'aef'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/configure-azure-devops-test-plans-integration-in-katalon-studio',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/configure-azure-devops-test-plans-integration-in-katalon-studio', '70d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/configure-qtest-integration-in-katalon-studio',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/configure-qtest-integration-in-katalon-studio', '48c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/configure-rally-integration-in-katalon-studio',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/configure-rally-integration-in-katalon-studio', '17f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/configure-testrail-integration-in-katalon-studio',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/configure-testrail-integration-in-katalon-studio', '254'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/jira-integration/configure-jira-integration-in-katalon-studio',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/jira-integration/configure-jira-integration-in-katalon-studio', 'c32'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/jira-integration/enable-testops---jira-integration-for-test-management',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/jira-integration/enable-testops---jira-integration-for-test-management', '0d8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/jira-integration/generate-manual-test-cases-with-jira-integration',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/jira-integration/generate-manual-test-cases-with-jira-integration', 'a5d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/jira-integration/manage-bdd-test-cases-with-jira-integration',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/jira-integration/manage-bdd-test-cases-with-jira-integration', 'c96'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/query-test-cases-linked-to-testrail-in-a-dynamic-test-suite',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/query-test-cases-linked-to-testrail-in-a-dynamic-test-suite', 'e1c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/testlink-integration',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/testlink-integration', 'f38'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/xray-integration/configure-xray-integration-in-katalon-testops',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/xray-integration/configure-xray-integration-in-katalon-testops', '4e0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/xray-integration/link-a-katalon-test-case-with-an-xray-test-issue',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/xray-integration/link-a-katalon-test-case-with-an-xray-test-issue', 'eb2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/xray-integration/link-a-katalon-test-run-with-an-xray-test-plan',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/xray-integration/link-a-katalon-test-run-with-an-xray-test-plan', 'cc1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/integration-for-organizing-tests/xray-integration/manually-push-katalon-test-result-to-xray',
        component: ComponentCreator('/docs/organize/integration-for-organizing-tests/xray-integration/manually-push-katalon-test-result-to-xray', '884'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/introduction-to-organizing-tests/introduction-to-organizing-tests',
        component: ComponentCreator('/docs/organize/introduction-to-organizing-tests/introduction-to-organizing-tests', '120'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/manage-tests/dynamic-test-suite/basic-search-for-dynamic-test-suite',
        component: ComponentCreator('/docs/organize/manage-tests/dynamic-test-suite/basic-search-for-dynamic-test-suite', '627'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/manage-tests/dynamic-test-suite/manage-dynamic-test-suites-in-katalon-studio',
        component: ComponentCreator('/docs/organize/manage-tests/dynamic-test-suite/manage-dynamic-test-suites-in-katalon-studio', '1c1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/manage-tests/dynamic-test-suite/test-case-management-with-tags',
        component: ComponentCreator('/docs/organize/manage-tests/dynamic-test-suite/test-case-management-with-tags', '5e8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/manage-tests/manage-test-suite-collections-in-katalon-studio',
        component: ComponentCreator('/docs/organize/manage-tests/manage-test-suite-collections-in-katalon-studio', 'fe2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/manage-tests/test-case/add-custom-fields-and-tags-to-test-cases',
        component: ComponentCreator('/docs/organize/manage-tests/test-case/add-custom-fields-and-tags-to-test-cases', 'd46'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/manage-tests/test-case/search-a-test-case-by-custom-fields-and-tags',
        component: ComponentCreator('/docs/organize/manage-tests/test-case/search-a-test-case-by-custom-fields-and-tags', 'e67'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/manage-tests/test-suite/manage-test-suites-in-katalon-studio',
        component: ComponentCreator('/docs/organize/manage-tests/test-suite/manage-test-suites-in-katalon-studio', 'e2b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/manage-tests/test-suite/manage-test-suites-in-katalon-testops',
        component: ComponentCreator('/docs/organize/manage-tests/test-suite/manage-test-suites-in-katalon-testops', 'e66'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/manage-workspace/search-test-cases-in-katalon-studio',
        component: ComponentCreator('/docs/organize/manage-workspace/search-test-cases-in-katalon-studio', '090'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/upload-test-scripts-from-a-git-repository/upload-test-scripts-from-the-git-repository-to-testops',
        component: ComponentCreator('/docs/organize/upload-test-scripts-from-a-git-repository/upload-test-scripts-from-the-git-repository-to-testops', '658'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/organize/view-test-scripts-in-katalon-platform/view-test-scripts-in-katalon-testops',
        component: ComponentCreator('/docs/organize/view-test-scripts-in-katalon-platform/view-test-scripts-in-katalon-testops', '47b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plan/create-and-edit-releases-in-testops',
        component: ComponentCreator('/docs/plan/create-and-edit-releases-in-testops', '4e8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plan/create-and-manage-builds-in-katalon-testops',
        component: ComponentCreator('/docs/plan/create-and-manage-builds-in-katalon-testops', 'a06'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plan/integration-for-test-planning/link-test-cases-to-jira-requirements',
        component: ComponentCreator('/docs/plan/integration-for-test-planning/link-test-cases-to-jira-requirements', '636'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plan/integration-for-test-planning/populate-jira-releases',
        component: ComponentCreator('/docs/plan/integration-for-test-planning/populate-jira-releases', 'b08'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plan/introduction-to-test-planning',
        component: ComponentCreator('/docs/plan/introduction-to-test-planning', '663'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plan/link-test-execution-with-a-testops-release-using-command-builder',
        component: ComponentCreator('/docs/plan/link-test-execution-with-a-testops-release-using-command-builder', '47d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plan/link-test-runs-to-a-release-in-testops',
        component: ComponentCreator('/docs/plan/link-test-runs-to-a-release-in-testops', '183'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-framework/configure-browsers-in-katalium-framework',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-framework/configure-browsers-in-katalium-framework', '5a8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-framework/create-a-test-case-in-katalium-framework',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-framework/create-a-test-case-in-katalium-framework', '427'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-framework/create-a-test-suite-in-katalium-framework',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-framework/create-a-test-suite-in-katalium-framework', 'b54'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-framework/get-started/katalium-framework-in-other-ides',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-framework/get-started/katalium-framework-in-other-ides', '8d4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-framework/get-started/katalium-framework-in-visual-studio-code',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-framework/get-started/katalium-framework-in-visual-studio-code', '8b6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-framework/katalium-framework-page-object-model',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-framework/katalium-framework-page-object-model', 'ddd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-framework/katalium-overview',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-framework/katalium-overview', '483'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-framework/other-utilities-in-katalium-framework',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-framework/other-utilities-in-katalium-framework', '6e2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-framework/real-time-monitoring-and-reporting-in-katalium-framework',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-framework/real-time-monitoring-and-reporting-in-katalium-framework', 'bbd'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-server/contributing-guidelines-for-katalium-server',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-server/contributing-guidelines-for-katalium-server', 'e8c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-server/get-started-with-katalium-server',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-server/get-started-with-katalium-server', '6e2'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-server/katalium-server---execute-katalon-studios-scripts-on-remote-machines',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-server/katalium-server---execute-katalon-studios-scripts-on-remote-machines', '20c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-server/katalium-server-overview',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-server/katalium-server-overview', '323'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-server/sessions-monitoring-for-katalium-server',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-server/sessions-monitoring-for-katalium-server', '648'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalium-server/webdriver-auto-update-for-katalium-server',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalium-server/webdriver-auto-update-for-katalium-server', 'c91'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-started/katalon-recorder-gui-overview',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-started/katalon-recorder-gui-overview', '8d9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-started/katalon-recorder-overview',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-started/katalon-recorder-overview', 'bcb'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-started/release-notes',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-started/release-notes', '2da'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/back-up-data-automatically-with-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/back-up-data-automatically-with-katalon-recorder', '264'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/control-the-flows/handle-conditional-cases-in-your-tests-with-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/control-the-flows/handle-conditional-cases-in-your-tests-with-katalon-recorder', 'a0f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/control-the-flows/how-to-use-control-flow-commands-in-a-test-case-in-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/control-the-flows/how-to-use-control-flow-commands-in-a-test-case-in-katalon-recorder', 'ee9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/create-your-first-automation-script-in-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/create-your-first-automation-script-in-katalon-recorder', 'f7f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/global-variables-in-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/global-variables-in-katalon-recorder', '657'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder', '597'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-write-data-in-a-test-case-with-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-write-data-in-a-test-case-with-katalon-recorder', 'fb3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/selenese-selenium-ide-commands-reference',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/selenese-selenium-ide-commands-reference', 'fdc'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/data-driven-testing-in-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/data-driven-testing-in-katalon-recorder', 'a8c'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/how-to-implement-data-driven-testing-in-a-test-case-with-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/how-to-implement-data-driven-testing-in-a-test-case-with-katalon-recorder', '499'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execute-scenarios/dynamic-test-suite-in-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execute-scenarios/dynamic-test-suite-in-katalon-recorder', '171'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execute-scenarios/use-the-command-line-runner-in-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execute-scenarios/use-the-command-line-runner-in-katalon-recorder', '0f9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execute-scenarios/use-the-self-healing-function-in-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execute-scenarios/use-the-self-healing-function-in-katalon-recorder', 'd6f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execution-report/view-execution-reports-in-testops',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execution-report/view-execution-reports-in-testops', '126'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-katalon-recorder-scripts-to-other-frameworks',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-katalon-recorder-scripts-to-other-frameworks', '7b8'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-test-projects-from-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-test-projects-from-katalon-recorder', '2f0'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/writing-custom-script-formatter-in-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/writing-custom-script-formatter-in-katalon-recorder', 'ae9'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/command-compatibility-between-selenium-ide-and-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/command-compatibility-between-selenium-ide-and-katalon-recorder', 'eab'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/extension-scripts-for-custom-locator-builders-and-actions-in-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/extension-scripts-for-custom-locator-builders-and-actions-in-katalon-recorder', '18f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/import-tests-from-selenium-ide-to-katalon-recorder',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/import-tests-from-selenium-ide-to-katalon-recorder', '1d1'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/katalon-recorder-helper-tool',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/katalon-recorder-helper-tool', 'b96'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/help-and-resources/katalon-recorder-acknowledgments',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/help-and-resources/katalon-recorder-acknowledgments', '0e7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/help-and-resources/katalon-recorder-faq-and-troubleshooting-instructions',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/help-and-resources/katalon-recorder-faq-and-troubleshooting-instructions', '894'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/help-and-resources/katalon-recorder-samples',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/help-and-resources/katalon-recorder-samples', '0b6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/production-evaluation-center/katalon-recorder-vs-alternatives',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/production-evaluation-center/katalon-recorder-vs-alternatives', 'cce'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-recorder-extension/production-evaluation-center/katalon-recorder-vs-selenium-ide',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-recorder-extension/production-evaluation-center/katalon-recorder-vs-selenium-ide', '57a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/access-to-katalon-store-from-katalon-studio',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/access-to-katalon-store-from-katalon-studio', '470'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/getting-started-with-katalon-store',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/getting-started-with-katalon-store', 'a5a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-api-keys-in-katalon-store',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-api-keys-in-katalon-store', 'fab'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-store-overview',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-store-overview', '1f6'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/create-your-first-katalon-studio-plugin',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/create-your-first-katalon-studio-plugin', 'feb'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/debug-your-platform-plugin-using-eclipse-ide',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/debug-your-platform-plugin-using-eclipse-ide', '128'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/develop-a-customized-report-plugin-in-katalon-studio',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/develop-a-customized-report-plugin-in-katalon-studio', '023'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/example-plugin-build-katalon-studio-testrail-integration-plugin',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/example-plugin-build-katalon-studio-testrail-integration-plugin', '4d3'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/generate-groovy-doc-for-a-plugin-on-katalon-store',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/generate-groovy-doc-for-a-plugin-on-katalon-store', 'b81'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-develop-a-custom-keywords-plugin-in-katalon-studio',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-develop-a-custom-keywords-plugin-in-katalon-studio', '53d'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-resolve-external-dependencies-for-a-plugin-in-katalon-studio',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-resolve-external-dependencies-for-a-plugin-in-katalon-studio', '3b4'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/install-plugins-online-from-the-katalon-store',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/install-plugins-online-from-the-katalon-store', 'c9f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/installing-plugin-offline-in-katalon-studio',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/installing-plugin-offline-in-katalon-studio', '034'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/integration-plugins-on-katalon-store',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/integration-plugins-on-katalon-store', '884'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/private-plugins-in-katalon-studio',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/private-plugins-in-katalon-studio', '605'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/using-katalon-store-plugins',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/using-katalon-store-plugins', '904'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/brand-guidelines-for-katalon-store-publishers',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/brand-guidelines-for-katalon-store-publishers', '5ce'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/katalon-store-on-plugin-document-guidelines',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/katalon-store-on-plugin-document-guidelines', '07a'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/katalon-store-plugin-approval-guidelines',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/katalon-store-plugin-approval-guidelines', '855'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/manage-published-plugins-on-katalon-store',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/manage-published-plugins-on-katalon-store', 'b54'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/submit-and-publish-a-new-plugin-on-katalon-store',
        component: ComponentCreator('/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/submit-and-publish-a-new-plugin-on-katalon-store', '86e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/proof-of-concept/autonomous-test-generation/autonomous-test-generation-with-katalon-ai',
        component: ComponentCreator('/docs/proof-of-concept/autonomous-test-generation/autonomous-test-generation-with-katalon-ai', '94e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/proof-of-concept/autonomous-test-generation/troubleshooting-autonomous-test-generation-issues',
        component: ComponentCreator('/docs/proof-of-concept/autonomous-test-generation/troubleshooting-autonomous-test-generation-issues', 'd6e'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/proof-of-concept/dependencies-management-with-native-gradle-support-poc-in-katalon-studio',
        component: ComponentCreator('/docs/proof-of-concept/dependencies-management-with-native-gradle-support-poc-in-katalon-studio', '930'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/proof-of-concept/execute-mobile-tests-with-appium-2.x-in-katalon-studio-poc',
        component: ComponentCreator('/docs/proof-of-concept/execute-mobile-tests-with-appium-2.x-in-katalon-studio-poc', '908'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/proof-of-concept/parameterize-azure-devops-test-case-id-list-in-katalon-studio-poc',
        component: ComponentCreator('/docs/proof-of-concept/parameterize-azure-devops-test-case-id-list-in-katalon-studio-poc', '732'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/proof-of-concept/studioassist-in-katalon-studio',
        component: ComponentCreator('/docs/proof-of-concept/studioassist-in-katalon-studio', 'c90'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/release-notes/katalon-cloud-studio/katalon-cloud-studio-beta-release',
        component: ComponentCreator('/docs/release-notes/katalon-cloud-studio/katalon-cloud-studio-beta-release', '2ca'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/release-notes/katalon-studio/katalon-studio-release-notes-version-6.x',
        component: ComponentCreator('/docs/release-notes/katalon-studio/katalon-studio-release-notes-version-6.x', 'd88'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/release-notes/katalon-studio/katalon-studio-release-notes-version-7.x',
        component: ComponentCreator('/docs/release-notes/katalon-studio/katalon-studio-release-notes-version-7.x', '9fe'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/release-notes/katalon-studio/katalon-studio-release-notes-version-8.x',
        component: ComponentCreator('/docs/release-notes/katalon-studio/katalon-studio-release-notes-version-8.x', '04f'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/release-notes/katalon-testcloud/katalon-testcloud-release-notes',
        component: ComponentCreator('/docs/release-notes/katalon-testcloud/katalon-testcloud-release-notes', '967'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/release-notes/katalon-testops/katalon-testops-release-notes',
        component: ComponentCreator('/docs/release-notes/katalon-testops/katalon-testops-release-notes', 'abf'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/security-and-privacy-faq',
        component: ComponentCreator('/docs/security-and-privacy-faq', '33b'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/supported-execution-environments/supported-environments-for-katalon-studio-and-katalon-runtime-engine-kre',
        component: ComponentCreator('/docs/supported-execution-environments/supported-environments-for-katalon-studio-and-katalon-runtime-engine-kre', 'f86'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/supported-execution-environments/supported-environments-for-katalon-testcloud',
        component: ComponentCreator('/docs/supported-execution-environments/supported-environments-for-katalon-testcloud', '3f7'),
        exact: true,
        sidebar: "aSidebar"
      },
      {
        path: '/docs/supported-technologies/supported-technologies-for-katalon-studio',
        component: ComponentCreator('/docs/supported-technologies/supported-technologies-for-katalon-studio', '6f5'),
        exact: true,
        sidebar: "aSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'bbd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
