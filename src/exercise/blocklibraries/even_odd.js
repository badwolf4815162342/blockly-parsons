/* eslint-disable camelcase */
const even_odd_blocklibrary = `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="*WRXg(7L]e[)*Um~GG2W">mod</variable>
    <variable id="-qP@.l-6=o4ueSGWh2+h">input_num</variable>
  </variables>
  <block type="group_title" id="|-^i8a_PX#fT0Jw!tD:/" x="37" y="37" editable="false" deletable="false" movable="false">
    <value name="TEXT">
      <shadow type="text" id="Xj-=E?w*kV6NjL^-_pjQ" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="|516-HK=?R6L7mIQokGb" movable="false" editable="false" deletable="false">
        <field name="TEXT">Set user input</field>
      </block>
    </value>
  </block>
  <block type="variables_set" id="_B2@@)l4@^[W{Lwa]33}" x="88" y="87" editable="false" deletable="false">
    <field name="VAR" id="-qP@.l-6=o4ueSGWh2+h">input_num</field>
    <value name="VALUE">
      <block type="math_number" id="IjnY$yxX7GXDM.Q:g30V" movable="false" editable="false" deletable="false">
        <field name="NUM">5</field>
      </block>
    </value>
  </block>
  <block type="group_title" id="sJu{UW6U;ZXg{q@oXwwF" x="37" y="163" editable="false" deletable="false" movable="false">
    <value name="TEXT">
      <shadow type="text" id="*7b)XeEG$]-P1y~^0NH)" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="h+*~.|SnnbCYtF-oDSMC" movable="false" editable="false" deletable="false">
        <field name="TEXT">Calculate remainder for odd/even decision</field>
      </block>
    </value>
  </block>
  <block type="variables_set" id="b].-Ljv%,9D{wOmJUjX$" x="70" y="220" editable="false" deletable="false">
    <field name="VAR" id="*WRXg(7L]e[)*Um~GG2W">mod</field>
    <value name="VALUE">
      <block type="math_arithmetic" id="T4A[R6y+ZI9?/^FgOrf0" movable="false" editable="false" deletable="false">
        <field name="OP">DIVIDE</field>
        <value name="A">
          <shadow type="math_number" id="t9X|));3KwXWo9_5BbeJ" deletable="false">
            <field name="NUM">1</field>
          </shadow>
          <block type="variables_get" id="$iInkV13gjpBrOI{WS?," movable="false" editable="false" deletable="false">
            <field name="VAR" id="-qP@.l-6=o4ueSGWh2+h">input_num</field>
          </block>
        </value>
        <value name="B">
          <shadow type="math_number" id="Qul$($m?l7WN4:@ti?l1" deletable="false">
            <field name="NUM">2</field>
          </shadow>
        </value>
      </block>
    </value>
  </block>
  <block type="group_title" id="M7N/sy^Qjo#L-k)H5QNY" x="38" y="313" editable="false" deletable="false" movable="false">
    <value name="TEXT">
      <shadow type="text" id="-*s(?u$3XWY8!UX}62L-" deletable="false">
        <field name="TEXT">Decide wether even/odd</field>
      </shadow>
      <block type="text" id="8NOQ_t!lst{3Q-.2S$%G" movable="false" editable="false" deletable="false">
        <field name="TEXT">Decide wether even/odd</field>
      </block>
    </value>
  </block>
  <block type="text_print" id=";KG(2@jP1m|;;po[t(X[" x="88" y="363" editable="false" deletable="false">
    <value name="TEXT">
      <shadow type="text" id=".0Lch2_iG~o!IDApV0YV" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="L-aE;28RiWnbwQMT+d3T" movable="false" editable="false" deletable="false">
        <field name="TEXT">Number is odd.</field>
      </block>
    </value>
  </block>
  <block type="text_print" id="At#ZUoq2hh6,G^=3PCph" x="38" y="413" editable="false" deletable="false">
    <value name="TEXT">
      <shadow type="text" id="bv?yAun%oD:@gbZif2Qh" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="J}fQvgMgEWwDUOQRP@_%" movable="false" editable="false" deletable="false">
        <field name="TEXT">Number is even.</field>
      </block>
    </value>
  </block>
  <block type="controls_if" id="@9{7$OX,Rx?^EtjGZdzJ" x="62" y="463" editable="false" deletable="false">
    <mutation else="1" />
    <value name="IF0">
      <block type="logic_compare" id="+(8FtaAfmQ*aQ|1*QEM-" movable="false" editable="false" deletable="false">
        <field name="OP">EQ</field>
        <value name="A">
          <block type="variables_get" id="JuaGan2HpUVcCwAZi@ry" movable="false" editable="false" deletable="false">
            <field name="VAR" id="*WRXg(7L]e[)*Um~GG2W">mod</field>
          </block>
        </value>
        <value name="B">
          <block type="math_number" id="x@A?JqVCSIqqjGLqjo^v" movable="false" editable="false" deletable="false">
            <field name="NUM">0</field>
          </block>
        </value>
      </block>
    </value>
  </block>
</xml>`;

export default even_odd_blocklibrary;
