import React from "react";
import "../Assets/css/Chat.css"
function Chat() {
    return(
        <>
        <div className="messagee">
        <div className="col-md-8 bg-white">
          <div className="chat-message">
            <ul className="chat">
              <li className="left clearfix">
                <span className="chat-img pull-left">
                  
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="primary-font">John Doe</strong>
                    <small className="pull-right text-muted"
                      ><i className="fa fa-clock-o"></i> 12 mins ago</small>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </li>
              <li className="right clearfix">
                <span className="chat-img pull-right">
                 
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="primary-font">Sarah</strong>
                    <small className="pull-right text-muted"
                      ><i className="fa fa-clock-o"></i> 13 mins ago</small>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur bibendum ornare dolor, quis ullamcorper ligula
                    sodales at.
                  </p>
                </div>
              </li>
              <li className="left clearfix">
                <span className="chat-img pull-left">
                  
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="primary-font">John Doe</strong>
                    <small className="pull-right text-muted"
                      ><i className="fa fa-clock-o"></i> 12 mins ago</small>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </li>
              <li className="right clearfix">
                <span className="chat-img pull-right">
                 
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="primary-font">Sarah</strong>
                    <small className="pull-right text-muted"
                      ><i className="fa fa-clock-o"></i> 13 mins ago</small>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur bibendum ornare dolor, quis ullamcorper ligula
                    sodales at.
                  </p>
                </div>
              </li>
              <li className="left clearfix">
                <span className="chat-img pull-left">
                  
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="primary-font">John Doe</strong>
                    <small className="pull-right text-muted"
                      ><i className="fa fa-clock-o"></i> 12 mins ago</small>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </li>
              <li className="right clearfix">
                <span className="chat-img pull-right">
                 
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="primary-font">Sarah</strong>
                    <small className="pull-right text-muted"
                      ><i className="fa fa-clock-o"></i> 13 mins ago</small>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur bibendum ornare dolor, quis ullamcorper ligula
                    sodales at.
                  </p>
                </div>
              </li>
              <li className="right clearfix">
                <span className="chat-img pull-right">
                 
                </span>
                <div className="chat-body clearfix">
                  <div className="header">
                    <strong className="primary-font">Sarah</strong>
                    <small className="pull-right text-muted"
                      ><i className="fa fa-clock-o"></i> 13 mins ago</small>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur bibendum ornare dolor, quis ullamcorper ligula
                    sodales at.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="chat-box bg-white">
            <div className="input-group">
              <input
                className="form-control border no-shadow no-rounded"
                placeholder="Type your message here"
              />
              <span className="input-group-btn">
                <button className="btn btn-success no-rounded send" type="button">
                  Send
                </button>
              </span>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}
export default Chat;