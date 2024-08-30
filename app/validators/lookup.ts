import vine from '@vinejs/vine'

export const lookupValidator = vine.compile(vine.object({
    Suffix: vine.string().trim(),
    Funder: vine.string().trim(),
    MembershipNo: vine.string().trim(),
  })
)
