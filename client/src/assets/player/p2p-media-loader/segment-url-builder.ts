import { Segment } from '@peertube/p2p-media-loader-core'
import { RedundancyUrlManager } from './redundancy-url-manager'

function segmentUrlBuilderFactory (redundancyUrlManager: RedundancyUrlManager, requiredSegmentsPriority: number) {
  return function segmentBuilder (segment: Segment) {
    // Don't use redundancy for high priority segments
    if (segment.priority <= requiredSegmentsPriority) return segment.url

    return redundancyUrlManager.buildUrl(segment.url)
  }
}

// ---------------------------------------------------------------------------

export {
  segmentUrlBuilderFactory
}
