import React from 'react';
import Taskitem from "../task-item/Taskitem"
import "./tasklist.css"
Tasklist.propTypes = {

};

function Tasklist(props) {
    return (
        <div className="row">
            <Taskitem taskName="Chạy bộ" taskAuthor="Văn" />
            <Taskitem taskName="Đạp xe" taskAuthor="Thiên" taskDescription="Chạy bộ buổi sáng" />
            <Taskitem taskName="Bơi lội" taskAuthor="Tuấn" taskDescription="Tập bơi" />
            <Taskitem taskName="Đá bóng" taskAuthor="Văn" taskDescription="Đi đá bóng buổi tối" />
            <Taskitem taskName="Cầu lông" taskAuthor="Thành" taskDescription="Mua vợt cầu lông" />
            <Taskitem taskName="Bóng chuyền" taskAuthor="Lễ" taskDescription="Đánh bóng chuyền cùng bạn" />
            <Taskitem taskName="Bóng bàn" taskAuthor="Tiến" taskDescription="Đánh bóng bàn"/>
            <Taskitem taskName="Chạy bộ" taskAuthor="Văn" />
        </div>
    );
}

export default Tasklist;