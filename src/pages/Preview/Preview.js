import React, { Fragment, useState, useContext } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { Row, Col, Input, Button, message, Modal, Empty } from 'antd';
import { CopyOutlined as IconCopyOutlined, TableOutlined as IconTableOutlined } from '@ant-design/icons';
import useActions from '../../store/useActions';
import { setSchemaJson } from './reducer/reducer';
import style from './preview.sass';
import { handleCopyTextClick } from '../../utils';
import schemaFormDefaultLang from 'antd-schema-form/language/default.json';
import schemaFormZhCNLang from 'antd-schema-form/language/zh-CN.json';
import { I18NContext } from '../../components/I18N/I18N';
import SchemaFormPreview from './SchemaFormPreview';

/* state */
const state = createStructuredSelector({
  schemaJson: createSelector(
    ($$state) => $$state.has('preview') ? $$state.get('preview') : null,
    ($$data) => $$data ? ($$data.get('schemaJson') ? $$data.get('schemaJson').toJS() : null) : null
  )
});

/* actions */
const actions = (dispatch) => ({
  action: bindActionCreators({
    setSchemaJson
  }, dispatch)
});

function Preview(props) {
  const { schemaJson } = useSelector(state);
  const { action } = useActions(actions);
  const context = useContext(I18NContext);
  const [textAreaValue, setTextAreaValue]
    = useState(schemaJson === null ? '' : JSON.stringify(schemaJson, null, 2));

  const { language, languagePack } = context;
  const { preview } = languagePack;
  const langMessage = languagePack.message;

  // 表单确认事件
  function handleOnFormOkClick(form, value, keys) {
    const langMessage = languagePack.message;

    Modal.info({
      content: (
        <div>
          <h4>{ langMessage.modalTitle }</h4>
          <pre>{ JSON.stringify(value, null, 2) }</pre>
        </div>
      )
    });
  }

  // 表单的change事件
  function handleInputTextAreaChange(event) {
    setTextAreaValue(event.target.value);
  }

  // 表单预览
  function handleRedoJsonSchema(event) {
    let value = null;

    try {
      value = JSON.parse(textAreaValue);
      action.setSchemaJson(value);
    } catch (err) {
      message.error(langMessage.jsonFormatError);
    }
  }

  return (
    <Fragment>
      <p>{ preview.introduction }</p>
      <Row className={ style.mb10 } type="flex" gutter={ 10 }>
        <Col xs={ 24 } sm={ 24 } md={ 8 }>
          <div className={ style.tools }>
            <Button className={ style.mr10 }
              icon={ <IconCopyOutlined /> }
              onClick={ handleCopyTextClick.bind(this, 'jsonSchemaTextArea2', langMessage.copyMessage) }
            >
              { preview.copy }
            </Button>
            <Button type="primary"
              icon={ <IconTableOutlined /> }
              onClick={ handleRedoJsonSchema }
            >
              { preview.generateForm }
            </Button>
          </div>
          <Input.TextArea id="jsonSchemaTextArea2"
            rows={ 20 }
            value={ textAreaValue }
            onChange={ handleInputTextAreaChange }
          />
        </Col>
        <Col xs={ 24 } sm={ 24 } md={ 16 }>
          {
            schemaJson ? (
              <SchemaFormPreview json={ schemaJson }
                languagePack={ language === 'zh-cn' ? schemaFormZhCNLang : schemaFormDefaultLang }
                onOk={ handleOnFormOkClick }
              />
            ) : (
              <div className={ style.noData }>
                <Empty description=" " image={ Empty.PRESENTED_IMAGE_SIMPLE } />
              </div>
            )
          }
        </Col>
      </Row>
    </Fragment>
  );
}

export default Preview;