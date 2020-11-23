import React, {useEffect, useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useSelector } from 'react-redux';
import { Input } from 'antd';
import useInput from '../../hooks/useInput';

const MyBlock = styled.div`
    width:100%;
    height:100%;
    /* background-color:#fff; */
    padding:30px 30px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    .head-class {
        width:100%;
        height:40px;
        /* margin:0 auto; */
        box-sizing:border-box;
        display:block;
        border:1px solid #f1f1f1;
        margin-bottom:15px;
        border-radius:3px;
        outline:none;
        padding: 10px;
        font-size:18px;
    }
    .wrapper-class{
    width:100%;
    /* margin: 0 auto; */
    margin-bottom: 4rem;
    background-color:#fff;
    }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    box-sizing:border-box;
    border-radius: 2px !important;
  }
  .toolbar-class {
    box-sizing:border-box;
  }
`;
const Left = styled.div`
      width: 50%;
      background-color:#fff;
      padding:15px;
      box-sizing:border-box;
      border: 0.0625rem solid #d7e2eb;
    border-radius: 0.75rem;
`;
const Right = styled.div`
    width:50%;
    background-color:#fff;
    position: relative;
    border: 0.0625rem solid #d7e2eb;
    border-radius: 0.75rem;
    overflow: hidden;
    padding: 1.5rem;
    box-sizing:border-box;
    margin-left:5%;

    .title {
        font-size:42px;
        font-weight:600;
    }
`;
const IntroduceContent = styled.div`

  margin-bottom: 4rem;
  `;

const TextEditor = ({history}) => {
    const [editorState,setEditorState] = useState(EditorState.createEmpty());
    const [editorTitle,setEditorTitle] = useInput('');
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    }
    console.debug(editorTitle)
    const { me } = useSelector((state)=> state.user);

    const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    useEffect(()=> {
        if(!me) {
            history.push('/')
        }
    },[me,history])
    return (
        <MyBlock>
            <Left>
            <Input 
            className="head-class"
            placeholder="제목"
            onChange={setEditorTitle}/>
            <Editor
            wrapperClassName="wrapper-class"
            editorClassName="editor"
            toolbarClassName="toolbar-class"
            toolbar={{
                list:{inDropdown : true},
                textAlign:{inDropdown : true},
                link: {inDropdown: true},
                history: {inDropdown:false},
            }}
            placeholder="내용을 작성해주세요"
            localization={{
                locale:'ko',
            }}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            />
            </Left>
            <Right>
            <div className="title">{editorTitle}</div>
            <IntroduceContent dangerouslySetInnerHTML={{__html: editorToHtml}}/>
            </Right>
        </MyBlock>
    );
}

export default TextEditor;