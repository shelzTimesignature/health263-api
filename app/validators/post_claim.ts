import vine from '@vinejs/vine'

export const postClaimValidator = vine.compile(
  vine.object({
    No: vine.string().trim(),
    Type: vine.string().trim()
  })
)


export const postHighBreedClaimValidator = vine.compile(
  vine.object({
    ClaimNo: vine.string().trim(),
    Type: vine.string().trim(),
  })
)
