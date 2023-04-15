import { AccessToken } from '@/main/domain/models'
import { AuthenticationError } from '@/main/domain/errors'

export interface FaceBookAuthentication {
  perform: (token: FaceBookAuthentication.Params) => Promise<FaceBookAuthentication.Result>
}

namespace FaceBookAuthentication {
  export type Params = {
    token: string
  }

  export type Result = AccessToken | AuthenticationError
}
