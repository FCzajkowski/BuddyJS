import { createRouter } from '../src/router.js';

// Mock state
function makeState() { return { path: '' }; }

test('navigates to valid route', () => {
  const state = makeState();
  const routes = { '/': () => 'home', '/foo': () => 'foo' };
  const router = createRouter(routes, state);
  router.navigate('/foo');
  expect(state.path).toBe('/foo');
});

test('navigates to 404 for invalid route', () => {
  const state = makeState();
  const routes = { '/': () => 'home', '/foo': () => 'foo', '/404': () => '404' };
  const router = createRouter(routes, state);
  router.navigate('/bar');
  // Simulate hashchange event
  window.dispatchEvent(new HashChangeEvent('hashchange'));
  expect(state.path).toBe('/404');
});
