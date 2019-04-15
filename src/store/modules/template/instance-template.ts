export default [
  {
    o: 'ServiceInstance',
    name: 'Instance Info',
    comp: 'ChartInstance',
    title: 'Instance Info',
    type: 'global',
    width: 3,
  },
  {
    o: 'ServiceInstance',
    name: 'Instance Avg Throughput',
    comp: 'ChartAvgThroughput',
    title: 'Instance Avg Throughput',
    type: 'instanceInfo',
    width: 3,
  },
  {
    o: 'ServiceInstance',
    name: 'Instance Avg Response',
    comp: 'ChartAvgResponse',
    title: 'Instance Avg Response',
    type: 'instanceInfo',
    width: 3,
  },
  {
    o: 'ServiceInstance',
    name: 'Instance Avg SLA',
    comp: 'ChartAvgSLA',
    title: 'Instance Avg SLA',
    type: 'instanceInfo',
    width: 3,
  },
  {
    o: 'ServiceInstance',
    name: 'Instance JVM GC',
    comp: 'ChartGC',
    title: 'JVM GC (ms)',
    width: 3,
  },
  {
    o: 'ServiceInstance',
    name: 'Instance JVM Heap',
    comp: 'ChartHeap',
    title: 'JVM Heap (MB)',
    width: 3,
  },
  {
    o: 'ServiceInstance',
    name: 'Instance JVM NonHeap',
    comp: 'ChartNonHeap',
    title: 'JVM Non-Heap MB',
    width: 3,
  },
  {
    o: 'ServiceInstance',
    name: 'Instance JVM CPU',
    comp: 'ChartCpu',
    title: 'JVM CPU %',
    width: 3,
  },
  {
    o: 'ServiceInstance',
    name: 'Instance CLR CPU',
    comp: 'ChartClrCPU',
    title: 'CLR CPU %',
    width: 3,
  },
  {
    o: 'ServiceInstance',
    name: 'Instance CLR Heap',
    comp: 'ChartClrHeap',
    title: 'CLR HeapMemory (MB)',
    width: 3,
  },
  {
    o: 'ServiceInstance',
    name: 'Instance CLR GC',
    comp: 'ChartClrGC',
    title: 'CLR GC (Count)',
    width: 3,
  },
];
