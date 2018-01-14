import Location from '../../src/domain-model/location';

const now = Date.now();

export default new Location.Model({
  timestamps: {
    createdAt: now,
    updatedAt: now
  },
  streetAddress: {
    primary: '100 Main St.',
    secondary: 'Suite 100'
  },
  city: 'Atlanta',
  state: 'Georgia',
  zipcode: '12345',
  coordinates: {
    latitude: 32.12345,
    longitude: 32.12345
  }
});
