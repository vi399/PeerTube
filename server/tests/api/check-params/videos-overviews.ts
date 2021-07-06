/* eslint-disable @typescript-eslint/no-unused-expressions,@typescript-eslint/require-await */

import 'mocha'
import { cleanupTests, flushAndRunServer, ServerInfo } from '@shared/extra-utils'

describe('Test videos overview', function () {
  let server: ServerInfo

  // ---------------------------------------------------------------

  before(async function () {
    this.timeout(30000)

    server = await flushAndRunServer(1)
  })

  describe('When getting videos overview', function () {

    it('Should fail with a bad pagination', async function () {
      await server.overviewsCommand.getVideos({ page: 0, expectedStatus: 400 })
      await server.overviewsCommand.getVideos({ page: 100, expectedStatus: 400 })
    })

    it('Should succeed with a good pagination', async function () {
      await server.overviewsCommand.getVideos({ page: 1 })
    })
  })

  after(async function () {
    await cleanupTests([ server ])
  })
})
