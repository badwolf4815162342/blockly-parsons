/* eslint-disable camelcase */
const find_max_and_even_odd_blocklibrary = `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="{.n;O~gc/tvR;8@4T-vp">max</variable>
    <variable id="LuF?A4Fzu-=.3oy$+$tn">list</variable>
    <variable id="4oTv|8O2h7FpX1?{XIYq">num</variable>
  </variables>
  <block type="group_title" id="+4VgYl=Ww0zb}r@!UbN5" x="13" y="-13" editable="false" deletable="false" movable="false">
    <value name="TEXT">
      <shadow type="text" id="nO@8ox~8(!1fE:syKQ5x" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="NnOblZEvmbkTZuS;e=D2" movable="false" editable="false" deletable="false">
        <field name="TEXT">Alternate</field>
      </block>
    </value>
  </block>
  <block type="group_title" id="jB+?Ir.D-y+@YG0eStN8" x="338" y="13" editable="false" deletable="false" movable="false">
    <value name="TEXT">
      <shadow type="text" id="*Hc0+;:v|V[]~l+11-S/" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="lWVs-Z;,4?GoQcSFqP$g" movable="false" editable="false" deletable="false">
        <field name="TEXT">Find Maximum</field>
      </block>
    </value>
  </block>
  <block type="text_print" id="w/w~=NuPjBZXi94woGz;" x="62" y="38" editable="false" deletable="false">
    <value name="TEXT">
      <shadow type="text" id="GSS?QyXBGXWs9vi)9i{_" deletable="false">
        <field name="TEXT">Number is odd.</field>
      </shadow>
    </value>
  </block>
  <block type="variables_set" id="q0NN;],}?ZGH]5M~DeSF" x="388" y="63" editable="false" deletable="false">
    <field name="VAR" id="{.n;O~gc/tvR;8@4T-vp">max</field>
    <value name="VALUE">
      <block type="variables_get" id="JRu-N{OQx]ahqsn89Jjv" movable="false" editable="false" deletable="false">
        <field name="VAR" id="4oTv|8O2h7FpX1?{XIYq">num</field>
      </block>
    </value>
  </block>
  <block type="controls_if" id="j1K6oz{G1O3VCN%IlP-e" x="13" y="87" editable="false" deletable="false">
    <mutation else="1" />
    <value name="IF0">
      <block type="math_number_property" id=":eB6ZT;|l/MCI#QI}L6q" movable="false" editable="false" deletable="false">
        <mutation divisor_input="false" />
        <field name="PROPERTY">EVEN</field>
        <value name="NUMBER_TO_CHECK">
          <shadow type="math_number" id="a@v~A=2KdXrb8ojhFCU~" deletable="false">
            <field name="NUM">0</field>
          </shadow>
          <block type="variables_get" id="ccon(S@2sn=mh^$W-pfH" movable="false" editable="false" deletable="false">
            <field name="VAR" id="4oTv|8O2h7FpX1?{XIYq">num</field>
          </block>
        </value>
      </block>
    </value>
  </block>
  <block type="text_print" id="r_}_JE3U9#EbpyFD(f(Q" x="313" y="112" editable="false" deletable="false">
    <value name="TEXT">
      <shadow type="text" id="9GvZR=/o#$Z;v]p*+jOw" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="?K!.Yxa%KP08sXEOc$2u" movable="false" editable="false" deletable="false">
        <field name="TEXT">This is the current max.</field>
      </block>
    </value>
  </block>
  <block type="controls_if" id="ldaKJ1QN[o1U%akKu2(R" x="363" y="163" editable="false" deletable="false">
    <value name="IF0">
      <block type="logic_compare" id="IUXoj;2qM;?E2]s_%aMu" movable="false" editable="false" deletable="false">
        <field name="OP">GTE</field>
        <value name="A">
          <block type="variables_get" id="q?UZxWg{KfiqfUC--4Sc" movable="false" editable="false" deletable="false">
            <field name="VAR" id="4oTv|8O2h7FpX1?{XIYq">num</field>
          </block>
        </value>
        <value name="B">
          <block type="variables_get" id="!uRYSa~4=y~qZ|t?RIv6" movable="false" editable="false" deletable="false">
            <field name="VAR" id="{.n;O~gc/tvR;8@4T-vp">max</field>
          </block>
        </value>
      </block>
    </value>
  </block>
  <block type="text_print" id="J@2Vr(qXcNYkz^6Wk~xf" x="37" y="213" editable="false" deletable="false">
    <value name="TEXT">
      <shadow type="text" id="0-i(=,+=DCCxr4at?w|2" deletable="false">
        <field name="TEXT">Number is even</field>
      </shadow>
    </value>
  </block>
  <block type="controls_repeat_ext" id="#IEY3n=SN.NWjsIEeVac" disabled="true" x="487" y="212" editable="false" deletable="false">
    <value name="TIMES">
      <shadow type="math_number" id="RnAbuDu#ER[+p)!N)Stz" deletable="false">
        <field name="NUM">10</field>
      </shadow>
      <block type="variables_get" id="o@parq)LxlXZ%F2PbJ0l" movable="false" editable="false" deletable="false">
        <field name="VAR" id="|cH300xOF|DgeP$?+ga-">x</field>
      </block>
    </value>
  </block>
  <block type="variables_set" id="n%2M{t4RiO?(wjs14-N{" x="312" y="262" editable="false" deletable="false">
    <field name="VAR" id="{.n;O~gc/tvR;8@4T-vp">max</field>
    <value name="VALUE">
      <block type="math_number" id="k:uhb!xNbKkG-a;={/B6" movable="false" editable="false" deletable="false">
        <field name="NUM">0</field>
      </block>
    </value>
  </block>
  <block type="group_title" id="gCnw)9w_dV8Tu@V2Tmf(" x="38" y="363" editable="false" deletable="false" movable="false">
    <value name="TEXT">
      <shadow type="text" id="k}Y):8N.)!^,=j|vGq8a" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="Ca}y-VPK(;/s{IOR-Vz3" movable="false" editable="false" deletable="false">
        <field name="TEXT">Read values</field>
      </block>
    </value>
  </block>
  <block type="group_title" id="Zvio2y)A!P)6[+-Nk9vn" x="412" y="362" editable="false" deletable="false" movable="false">
    <value name="TEXT">
      <shadow type="text" id="%nh8NrCvlJ$!!|Ea+uQE" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="^Z*vE+iAK=-pWQVe[u#1" movable="false" editable="false" deletable="false">
        <field name="TEXT">loop through list</field>
      </block>
    </value>
  </block>
  <block type="variables_set" id="h}r+l!~}gP9(}c1s]?[K" x="12" y="412" editable="false" deletable="false">
    <field name="VAR" id="LuF?A4Fzu-=.3oy$+$tn">list</field>
    <value name="VALUE">
      <block type="lists_create_with" id="(X7AlF?X%9Nl(U7kT^s=" movable="false" editable="false" deletable="false">
        <mutation items="3" />
        <value name="ADD0">
          <block type="math_number" id="9,9Nvta:HGPV,Zkx!+%B" movable="false" editable="false" deletable="false">
            <field name="NUM">5</field>
          </block>
        </value>
        <value name="ADD1">
          <block type="math_number" id="4;@7K?7J2C+aELcEp~QY" movable="false" editable="false" deletable="false">
            <field name="NUM">2</field>
          </block>
        </value>
        <value name="ADD2">
          <block type="math_number" id="Pxf|qD|#;zTeniw3|dP}" movable="false" editable="false" deletable="false">
            <field name="NUM">8</field>
          </block>
        </value>
      </block>
    </value>
  </block>
  <block type="controls_forEach" id="N$*3$/)CVf|[Bt!zw3$q" x="363" y="413" editable="false" deletable="false">
    <field name="VAR" id="4oTv|8O2h7FpX1?{XIYq">num</field>
    <value name="LIST">
      <block type="variables_get" id="qHfJ}t;_)AEPUMUmBU?8" movable="false" editable="false" deletable="false">
        <field name="VAR" id="LuF?A4Fzu-=.3oy$+$tn">list</field>
      </block>
    </value>
  </block>
</xml>`;

export default find_max_and_even_odd_blocklibrary;
