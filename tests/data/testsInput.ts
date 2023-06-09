import { CloudEnvironment } from '../../src/models/cloudEnvironment';

export const input1: CloudEnvironment = {
  vms: [
    {
      vm_id: 'vm-9ea3998',
      name: 'frontend server',
      tags: ['antivirus'],
    },
    {
      vm_id: 'vm-5f3ad2b',
      name: 'frontend server',
      tags: ['http'],
    },
    {
      vm_id: 'vm-d9e0825',
      name: 'etcd node',
      tags: ['ssh'],
    },
    {
      vm_id: 'vm-59574582',
      name: 'k8s node',
      tags: ['antivirus', 'ssh', 'api', 'windows-dc'],
    },
    {
      vm_id: 'vm-f00923',
      name: 'billing service',
      tags: ['http', 'dev', 'k8s'],
    },
    {
      vm_id: 'vm-575c4a',
      name: 'rabbitmq',
      tags: ['dev', 'k8s'],
    },
    {
      vm_id: 'vm-0c1791',
      name: 'php app',
      tags: ['http', 'ci', 'reverse_proxy', 'dev'],
    },
    {
      vm_id: 'vm-2987241',
      name: 'dev-srv-5',
      tags: ['k8s', 'api', 'nat', 'reverse_proxy'],
    },
    {
      vm_id: 'vm-ab51cba10',
      name: 'ssh bastion',
      tags: ['https', 'storage', 'loadbalancer', 'corp', 'django'],
    },
    {
      vm_id: 'vm-a3660c',
      name: 'frontend server',
      tags: ['k8s', 'ssh'],
    },
    {
      vm_id: 'vm-864a94f',
      name: 'kafka',
      tags: ['dev'],
    },
  ],
  fw_rules: [
    {
      fw_id: 'fw-dd3c1e',
      source_tag: 'k8s',
      dest_tag: 'django',
    },
    {
      fw_id: 'fw-1688373be0',
      source_tag: 'antivirus',
      dest_tag: 'corp',
    },
    {
      fw_id: 'fw-f1fcfa',
      source_tag: 'http',
      dest_tag: 'loadbalancer',
    },
    {
      fw_id: 'fw-93b1338c12',
      source_tag: 'api',
      dest_tag: 'corp',
    },
    {
      fw_id: 'fw-e1d2dcbf3',
      source_tag: 'ssh',
      dest_tag: 'storage',
    },
    {
      fw_id: 'fw-8e836298',
      source_tag: 'ssh',
      dest_tag: 'django',
    },
    {
      fw_id: 'fw-742ac1',
      source_tag: 'k8s',
      dest_tag: 'django',
    },
    {
      fw_id: 'fw-2bf982',
      source_tag: 'ssh',
      dest_tag: 'django',
    },
    {
      fw_id: 'fw-9c95744ef',
      source_tag: 'reverse_proxy',
      dest_tag: 'django',
    },
    {
      fw_id: 'fw-36b8c424e',
      source_tag: 'nat',
      dest_tag: 'corp',
    },
    {
      fw_id: 'fw-87b059',
      source_tag: 'api',
      dest_tag: 'django',
    },
    {
      fw_id: 'fw-2d389ea',
      source_tag: 'ci',
      dest_tag: 'https',
    },
    {
      fw_id: 'fw-3a7c1e8',
      source_tag: 'ssh',
      dest_tag: 'storage',
    },
    {
      fw_id: 'fw-3279918d6',
      source_tag: 'k8s',
      dest_tag: 'storage',
    },
    {
      fw_id: 'fw-dc2742a339',
      source_tag: 'http',
      dest_tag: 'django',
    },
    {
      fw_id: 'fw-9546840161',
      source_tag: 'reverse_proxy',
      dest_tag: 'corp',
    },
    {
      fw_id: 'fw-966d9bd4',
      source_tag: 'api',
      dest_tag: 'https',
    },
    {
      fw_id: 'fw-8ad7dc',
      source_tag: 'k8s',
      dest_tag: 'corp',
    },
    {
      fw_id: 'fw-6c4649bc',
      source_tag: 'ci',
      dest_tag: 'loadbalancer',
    },
    {
      fw_id: 'fw-c7ee8f3',
      source_tag: 'http',
      dest_tag: 'loadbalancer',
    },
    {
      fw_id: 'fw-b3557d17',
      source_tag: 'windows-dc',
      dest_tag: 'https',
    },
    {
      fw_id: 'fw-fc619d1',
      source_tag: 'ssh',
      dest_tag: 'storage',
    },
    {
      fw_id: 'fw-2a83fc853',
      source_tag: 'ci',
      dest_tag: 'loadbalancer',
    },
    {
      fw_id: 'fw-3069e1653',
      source_tag: 'api',
      dest_tag: 'loadbalancer',
    },
    {
      fw_id: 'fw-2ab931510',
      source_tag: 'dev',
      dest_tag: 'https',
    },
    {
      fw_id: 'fw-eb38b5d',
      source_tag: 'ssh',
      dest_tag: 'loadbalancer',
    },
    {
      fw_id: 'fw-7f0d52f2',
      source_tag: 'k8s',
      dest_tag: 'loadbalancer',
    },
    {
      fw_id: 'fw-e8cd165c',
      source_tag: 'ci',
      dest_tag: 'loadbalancer',
    },
    {
      fw_id: 'fw-e85265e1',
      source_tag: 'api',
      dest_tag: 'https',
    },
    {
      fw_id: 'fw-41c837edbb',
      source_tag: 'ci',
      dest_tag: 'https',
    },
  ],
};

export const twoDuplicateVms = {
  vms: [
    {
      vm_id: 'vm-123',
      name: '123',
      tags: ['a', 'b'],
    },
    {
      vm_id: 'vm-123',
      name: '123',
      tags: ['a', 'b'],
    },
  ],
  fw_rules: [
    {
      fw_id: 'fw-123',
      source_tag: 'a',
      dest_tag: 'b',
    },
  ],
};

export const fwRuleSameSourceDest = {
  vms: [
    {
      vm_id: 'vm-123',
      name: '123',
      tags: ['a'],
    },
  ],
  fw_rules: [
    {
      fw_id: 'fw-123',
      source_tag: 'a',
      dest_tag: 'a',
    },
  ],
};

export const emptyFwRules = {
  vms: [
    {
      vm_id: 'vm-a211de',
      name: 'jira_server',
      tags: ['ci', 'dev'],
    },
    {
      vm_id: 'vm-c7bac01a07',
      name: 'bastion',
      tags: ['ssh', 'dev'],
    },
  ],
  fw_rules: [],
};

export const emptyVms = {
  vms: [],
  fw_rules: [
    {
      fw_id: 'fw-123',
      source_tag: 'a',
      dest_tag: 'a',
    },
  ],
};
