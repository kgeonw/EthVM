import { ref } from 'vue'
import { useAddressEventSubscription } from '@module/address/apollo/addressEvent.generated'
import { AddressEventType } from '@/apollo/types'

export function useAddressUpdate(addressRef: string) {
    const newErc20Transfer = ref(0)

    const { result: addressUpdate, onResult } = useAddressEventSubscription({
        owner: addressRef
    })

    onResult(data => {
        if (data?.data?.addressEvent.event === AddressEventType.NewErc20Transfer) {
            console.log('New address')
            newErc20Transfer.value += 1
        }
    })

    const resetCount = () => {
        newErc20Transfer.value = 0
    }
    return { newErc20Transfer, resetCount }
}
