/* eslint-disable camelcase */
const reverse_word_and_wordlist_blocklibrary = `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id=",,M%_MG6[oi^RPyD@/4$">word</variable>
    <variable id=")B5|ts8+:qg}H!QNdPS#">letter</variable>
    <variable id="H|faJeHkeC=j(3_6^s8k">new_word</variable>
    <variable id="/H0zamS-3CFEiqhRxwqr">words</variable>
    <variable id="o*Q}|h3u5}krYFceD*S#">new_words</variable>
  </variables>
  <block type="group_title" id="wkWP8Td7$H4Jj$,%:9;J" x="37" y="38" editable="false" deletable="false" movable="false">
    <value name="TEXT">
      <shadow type="text" id="f#}v^f(GX4xWPkx/|V;D" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="FSBX!iTkLMhoM3)g3-tP" movable="false" editable="false" deletable="false">
        <field name="TEXT">The given array</field>
      </block>
    </value>
  </block>
  <block type="variables_set" id="N6U95E}V^M-D$iB@UJZj" x="88" y="88" editable="false" deletable="false">
    <field name="VAR" id="/H0zamS-3CFEiqhRxwqr">words</field>
    <value name="VALUE">
      <block type="lists_create_with" id="#^F7%z3BZZ=(t@/@4fDU" movable="false" editable="false" deletable="false">
        <mutation items="6" />
        <value name="ADD0">
          <block type="text" id="mJ0(AwZg?j6k2fV3(q-D" movable="false" editable="false" deletable="false">
            <field name="TEXT">Once</field>
          </block>
        </value>
        <value name="ADD1">
          <block type="text" id="lR!SFkJait~aw%/P^3kf" movable="false" editable="false" deletable="false">
            <field name="TEXT">upon</field>
          </block>
        </value>
        <value name="ADD2">
          <block type="text" id="|NManvNb-p(o7!ZD8]--" movable="false" editable="false" deletable="false">
            <field name="TEXT">a</field>
          </block>
        </value>
        <value name="ADD3">
          <block type="text" id="DLFKnm5Y(3R2ojn;o**_" movable="false" editable="false" deletable="false">
            <field name="TEXT">time</field>
          </block>
        </value>
        <value name="ADD4">
          <block type="text" id="^2HbV=O?;:%kMfWdSLV." movable="false" editable="false" deletable="false">
            <field name="TEXT">in</field>
          </block>
        </value>
        <value name="ADD5">
          <block type="text" id="-1tEry5HHe-c^5QcF,tx" movable="false" editable="false" deletable="false">
            <field name="TEXT">oppositeland</field>
          </block>
        </value>
      </block>
    </value>
  </block>
  <block type="group_title" id="cXHKJO-{.,mTSNtK(X$h" x="37" y="287" editable="false" deletable="false" movable="false">
    <value name="TEXT">
      <shadow type="text" id="{%f-5;Y:gY{v~w(5BX5:" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="H/{J9O%O3PagvBwQOpC|" movable="false" editable="false" deletable="false">
        <field name="TEXT">reverse the letters in a word</field>
      </block>
    </value>
  </block>
  <block type="controls_forEach" id="vP7e|Q3OuxOtq?o6tTY+" x="87" y="338" editable="false" deletable="false">
    <field name="VAR" id=")B5|ts8+:qg}H!QNdPS#">letter</field>
    <value name="LIST">
      <block type="variables_get" id="0s%R7;poyQNmoI#;+ab-" movable="false" editable="false" deletable="false">
        <field name="VAR" id=",,M%_MG6[oi^RPyD@/4$">word</field>
      </block>
    </value>
  </block>
  <block type="variables_set" id="WG4$t:rP$ADw0VsGN=kB" x="313" y="363" editable="false" deletable="false">
    <field name="VAR" id="H|faJeHkeC=j(3_6^s8k">new_word</field>
    <value name="VALUE">
      <block type="text" id="n.{Xjb7Xn-o1=GUASU1l" movable="false" editable="false" deletable="false">
        <field name="TEXT" />
      </block>
    </value>
  </block>
  <block type="text_append" id="p^y4?%g5#0prGv+dV[%g" x="37" y="387" editable="false" deletable="false">
    <field name="VAR" id=")B5|ts8+:qg}H!QNdPS#">letter</field>
    <value name="TEXT">
      <shadow type="text" id="m}TY-jt24Z7q(,M!**j}" deletable="false">
        <field name="TEXT" />
      </shadow>
      <block type="variables_get" id="t!uQ-xypZ)0H_0dma6Es" movable="false" editable="false" deletable="false">
        <field name="VAR" id="H|faJeHkeC=j(3_6^s8k">new_word</field>
      </block>
    </value>
  </block>
  <block type="group_title" id="R2S-a8|k-PGO:V%@Y=,_" x="37" y="463" editable="false" deletable="false" movable="false">
    <value name="TEXT">
      <shadow type="text" id="RW|+.v.2h5R#%rCMP|hp" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="text" id="^8vy@cP7.B.G9-uE%bLH" movable="false" editable="false" deletable="false">
        <field name="TEXT">New list with elements in reverse</field>
      </block>
    </value>
  </block>
  <block type="controls_forEach" id="*^]g7dKsk2PJ#Vwi[Lx." x="88" y="512" editable="false" deletable="false">
    <field name="VAR" id=",,M%_MG6[oi^RPyD@/4$">word</field>
    <value name="LIST">
      <block type="variables_get" id="9/Zi$61+@_]avwBgss,$" movable="false" editable="false" deletable="false">
        <field name="VAR" id="/H0zamS-3CFEiqhRxwqr">words</field>
      </block>
    </value>
  </block>
  <block type="variables_set" id="KbNoaA_i^1H2-riU=f^0" x="13" y="563" editable="false" deletable="false">
    <field name="VAR" id="o*Q}|h3u5}krYFceD*S#">new_words</field>
    <value name="VALUE">
      <block type="lists_create_with" id="i[6-^t6v:!SaaOx*Ib*L" movable="false" editable="false" deletable="false">
        <mutation items="0" />
      </block>
    </value>
  </block>
  <block type="lists_setIndex" id="yQX*4s=E[H)kd!#.RSQz" x="138" y="587" editable="false" deletable="false">
    <mutation at="false" />
    <field name="MODE">INSERT</field>
    <field name="WHERE">FIRST</field>
    <value name="LIST">
      <block type="variables_get" id="A}seQ)x(--{%Ef,1fsgD" movable="false" editable="false" deletable="false">
        <field name="VAR" id="o*Q}|h3u5}krYFceD*S#">new_words</field>
      </block>
    </value>
    <value name="TO">
      <block type="variables_get" id="dz]{KgVO!5iAB1;gR-z+" movable="false" editable="false" deletable="false">
        <field name="VAR" id="H|faJeHkeC=j(3_6^s8k">new_word</field>
      </block>
    </value>
  </block>
  <block type="text_print" id="#%o*+WwqV8-iqmfOlV]t" x="37" y="613" editable="false" deletable="false">
    <value name="TEXT">
      <shadow type="text" id="r#V(BnMQi)hCS@$;N=8w" deletable="false">
        <field name="TEXT">abc</field>
      </shadow>
      <block type="lists_split" id="liuT-p.CM3-SxH}hKWY9" movable="false" editable="false" deletable="false">
        <mutation mode="JOIN" />
        <field name="MODE">JOIN</field>
        <value name="INPUT">
          <block type="variables_get" id="xrg:T-U/jrx2M!zKajML" movable="false" editable="false" deletable="false">
            <field name="VAR" id="o*Q}|h3u5}krYFceD*S#">new_words</field>
          </block>
        </value>
        <value name="DELIM">
          <shadow type="text" id="{hhdBZ~B|]EA2fBb:t|l" deletable="false">
            <field name="TEXT">,</field>
          </shadow>
          <block type="text" id="m-/,WSYgzJl*gE;f~NN|" movable="false" editable="false" deletable="false">
            <field name="TEXT">,</field>
          </block>
        </value>
      </block>
    </value>
  </block>
</xml>`;

export default reverse_word_and_wordlist_blocklibrary;