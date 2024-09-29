import { create } from 'zustand'

const useConversation = create((set) => ({
    //it is something same as useState
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages })
}))

export default useConversation