import React, {Component} from 'react';
import axios from 'axios'
import CommentList from '../CommentList/commentList';

class ReplyForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                    reply_text: '',
                    // comment_id: '',
                    comment: '',
            }
    }

    addReply = async () => {
        const reply = {
            reply_text: this.state.reply_text,
            // comment_id: this.props.commentid,
            comment: this.props.commentid,
        }
        try{
            console.log("add reply request is called")  // test
            console.log(this.props.commentid)
            await axios.post('http://127.0.0.1:8000/comments/reply/', reply);
            let replies = this.props.showReplies();
            this.setState({
            });
            return replies;
        }
        catch (err) {
            console.log(err)
        }
    }
    
    handleChange = (event) => {
        console.log("beginning handle change") // test
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("end of handle change") // test
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.addReply();
    }

    render() {
        return(
            <React.Fragment>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div>
                    <input type="text" name="reply_text" onChange={this.handleChange}
                    value={this.state.reply_text} placeholder="Reply here"/>    
                    </div>  
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <h2>{replies}</h2>
            </React.Fragment>
        )
    }
}

export default ReplyForm;