export default async function handler(req, res) {
  res.status(200).json({
    name: "abbi-data-api",
    version: "1.0.0",
    status: "active",
    description: "ABBI Data API for Snowflake integration"
  });
}
