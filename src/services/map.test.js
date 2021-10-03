/* eslint-env jest */

const mapService = require('./map.service');

describe('get "GeoJSON features" of a location given with the coordinate', () => {
  it('200: Should return GEOJSON features of given valid location coordinates', async () => {
    const payload = {
      left: '44.8159610691',
      bottom: '20.4595548745',
      right: '44.8168609308',
      top: '20.4608191255'
    };
    const { status, data } = await mapService.getGEOJSON(payload);
    console.log({ status, data });
  });

  it('400: Invalid / Missing Payload throws error', async () => {
    const payload = {
      left: 1
    };
    try {
      await mapService.getGEOJSON(payload);
      expect.hasAssertions();
    } catch ({ response }) {
      expect(response.status).toBe(400);
    }
  });

  it('400: Invalid coordinates throws error, coming from 3rd party API.', async () => {
    const payload = {
      left: 1,
      bottom: 1,
      right: 2,
      top: 3
    };
    try {
      await mapService.getGEOJSON(payload);
      expect.hasAssertions();
    } catch ({ response }) {
      expect(response.status).toBe(400);
    }
  });
});
