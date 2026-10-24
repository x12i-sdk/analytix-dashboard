import assert from 'node:assert/strict';
import { DashboardRunner } from '@x12i/analytix-dashboard';
const timestamp = '2026-01-01T00:00:00.000Z';
const common = { _catalogId: 'fixture', id: 'fixture', version: 1, status: 'active', title: 'Example',
  createdAt: timestamp, updatedAt: timestamp, createdBy: 'example', updatedBy: 'example', metadata: {},
};
function analyticResult(id, data) { return { analyticId: id, analyticType: 'query', version: 1, status: 'active', data,
  meta: { cache: { hit: false, key: 'fixture' }, probes: [], execution: { durationMs: 0, startedAt: timestamp, finishedAt: timestamp, traceId: 'fixture-trace' } },
}; }
const definition = { ...common, dashboardId: 'fixture-dashboard', snapshot: { enabled: false }, widgets: [
  { widgetId: 'orders', type: 'metric', analyticRef: 'orders.total', failurePolicy: 'fail-widget' },
  { widgetId: 'unavailable', type: 'metric', analyticRef: 'offline', failurePolicy: 'fail-widget' },
] };
const result = await DashboardRunner.run(definition, {}, async ref => { if (ref === 'offline') throw new Error('Synthetic unavailable source'); return analyticResult(ref, 3); });
assert.equal(result.widgets[0].result.data, 3);
assert.equal(result.widgets[1].status, 'error');
assert.equal(result.meta.failedWidgetCount, 1);
console.log(result);
