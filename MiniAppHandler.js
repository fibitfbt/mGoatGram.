import { MiniKit, ResponseEvent } from '@worldcoin/minikit-js'

export function ReactComponent() {
	// ...
	useEffect(() => {
		MiniKit.subscribe(ResponseEvent.MiniAppVerifyAction, async payload => {
			if (payload.status === 'error') {
				return console.log('Error payload', payload)
			}

			// Verify the proof in the backend
			const verifyResponse = await fetch('/api/verify', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					//...
				},
			})
		})

		return () => {
			// Clean up on unmount
			MiniKit.unsubscribe(ResponseEvent.MiniAppVerifyAction)
		}
	}, [])
}
