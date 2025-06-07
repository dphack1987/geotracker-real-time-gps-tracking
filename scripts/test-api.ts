import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:8000/api';

async function testAPI() {
  try {
    console.log('🧪 Starting API tests...\n');

    // Test creating a tracking link
    console.log('Testing tracking link creation...');
    const createLinkResponse = await fetch(`${BASE_URL}/tracking-links`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ templateType: 'seguridad' })
    });
    const link = await createLinkResponse.json();
    console.log('✅ Created tracking link:', link);

    if (!link.shortCode) {
      throw new Error('No shortCode returned from link creation');
    }

    // Test getting tracking link
    console.log('\nTesting tracking link retrieval...');
    const getLinkResponse = await fetch(`${BASE_URL}/tracking-links?shortCode=${link.shortCode}`);
    const retrievedLink = await getLinkResponse.json();
    console.log('✅ Retrieved tracking link:', retrievedLink);

    // Test capturing location
    console.log('\nTesting location capture...');
    const locationData = {
      shortCode: link.shortCode,
      latitude: 40.7128,
      longitude: -74.0060,
      accuracy: 10,
      altitude: 100,
      speed: 0,
      heading: 90,
      deviceInfo: {
        userAgent: 'Test User Agent',
        platform: 'Test Platform',
        language: 'en-US',
        screenResolution: '1920x1080',
        timezone: 'America/New_York',
        ipAddress: '127.0.0.1'
      }
    };

    const captureResponse = await fetch(`${BASE_URL}/tracking-captures`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(locationData)
    });
    const captureResult = await captureResponse.json();
    console.log('✅ Captured location:', captureResult);

    // Test getting captures
    console.log('\nTesting captures retrieval...');
    const getCapturesResponse = await fetch(`${BASE_URL}/tracking-captures?shortCode=${link.shortCode}`);
    const captures = await getCapturesResponse.json();
    console.log('✅ Retrieved captures:', captures);

    // Test system statistics
    console.log('\nTesting system statistics...');
    const statsResponse = await fetch(`${BASE_URL}/tracking-links`);
    const stats = await statsResponse.json();
    console.log('✅ System statistics:', stats);

    console.log('\n✨ All tests completed successfully!');
  } catch (error) {
    console.error('\n❌ Test failed:', error);
    process.exit(1);
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  testAPI().catch(console.error);
}
