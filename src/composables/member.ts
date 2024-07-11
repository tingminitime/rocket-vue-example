import type { Member } from '~/types/api/member'

export function useMember() {
  const randomUserURL = 'https://randomuser.me/api/?inc=name,locatione,email,picture,phone,registered,login&noinfo'

  const {
    data,
    isFetching: isMemberFetching,
    error: memberError,
  } = useFetch<{
    results: Member[]
  }>(randomUserURL).json()

  const memberData = computed<Member | null>(() => {
    return data.value?.results[0] ?? null
  })

  return {
    memberData,
    isMemberFetching,
    memberError,
  }
}
