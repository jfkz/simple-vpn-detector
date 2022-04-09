#!/usr/bin/env node
import { isVPNDetected } from './main'

const apiKey: string = process.env.IP_GEOLOCATION_API_KEY || '';

isVPNDetected(apiKey)
