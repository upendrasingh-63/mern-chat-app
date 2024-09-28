import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js';


export const sendMessage = async (req, res) => {
    try {

        const { Id: receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId] } })
        if (!conversation) {
            conversation = await Conversation.create({ members: [senderId, receiverId] });
            // await newConversation.save()
        }

        const newMessage = new Message(
            {
                senderId,
                receiverId,
                message
            }
        )
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //SOCKET IO FUNCTIONALITY WILL GO HERE

        //  await  conversation.save()
        //  await newMessage.save();

        // this will run in parallel 
        await Promise.all([conversation.save(), newMessage.save()])

        // res.status(200).json({message:"Message send successfully"})
        res.status(201).json(newMessage)


    } catch (error) {
        console.log("Error in send message controller", error.message)
        res.status(500).json({ error: "Internal server error" })

    }
}


export const getMessage= async (req,res)=>{
    try {
        const {Id:userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            members: { $all: [senderId, userToChatId] } 
        }).populate("messages")

        if(!conversation){
            return res.status(200).json({})
        }

        const messages=conversation.messages;

        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error in get message controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}