/* eslint-disable max-len */
// start positioning
// "bock " -> "block editable="false" deletable="false" "
// "shadow " -> "shadow editable="false" "
// x="0" -> y="height+20"
// underblocks movable="false"
const blocklibrary = `<xml xmlns="https://developers.google.com/blockly/xml">
<variables>
  <variable id="{.n;O~gc/tvR;8@4T-vp">max</variable>
  <variable id="4oTv|8O2h7FpX1?{XIYq">num</variable>
  <variable id="|cH300xOF|DgeP$?+ga-">x</variable>
</variables>
<block type="text" id="Ca}y-VPK(;/s{IOR-Vz3" x="37" y="37">
  <field name="TEXT">Title: Read values</field>
</block>
<block type="text" id="lWVs-Z;,4?GoQcSFqP$g" x="362" y="38">
  <field name="TEXT">Title: Find extreme value</field>
</block>
<block type="variables_set" id="Y.$wri/Q+NJDrXBq,NdI" x="63" y="87">
  <field name="VAR" id="4oTv|8O2h7FpX1?{XIYq">num</field>
  <value name="VALUE">
    <block type="math_number" id="Cexgf[%1cG(rW%{W.dqQ">
      <field name="NUM">5</field>
    </block>
  </value>
</block>
<block type="variables_set" id="n%2M{t4RiO?(wjs14-N{" x="362" y="87">
  <field name="VAR" id="{.n;O~gc/tvR;8@4T-vp">max</field>
  <value name="VALUE">
    <block type="variables_get" id="2wqSJ~-VDofeg}zyOauM">
      <field name="VAR" id="4oTv|8O2h7FpX1?{XIYq">num</field>
    </block>
  </value>
</block>
<block type="text_print" id="r_}_JE3U9#EbpyFD(f(Q" x="338" y="138">
  <value name="TEXT">
    <shadow type="text" id="9GvZR=/o#$Z;v]p*+jOw">
      <field name="TEXT">abc</field>
    </shadow>
    <block type="text" id="?K!.Yxa%KP08sXEOc$2u">
      <field name="TEXT">This is the current max.</field>
    </block>
  </value>
</block>
<block type="variables_set" id="eoyuRpNq#W3x{!3b8c+n" x="63" y="163">
  <field name="VAR" id="4oTv|8O2h7FpX1?{XIYq">num</field>
  <value name="VALUE">
    <block type="math_number" id="rBIi[e~ybiU911)5MTOi">
      <field name="NUM">8</field>
    </block>
  </value>
</block>
<block type="controls_if" id="ldaKJ1QN[o1U%akKu2(R" x="312" y="187">
  <value name="IF0">
    <block type="logic_compare" id="IUXoj;2qM;?E2]s_%aMu">
      <field name="OP">GT</field>
      <value name="A">
        <block type="variables_get" id="q?UZxWg{KfiqfUC--4Sc">
          <field name="VAR" id="4oTv|8O2h7FpX1?{XIYq">num</field>
        </block>
      </value>
      <value name="B">
        <block type="variables_get" id="!uRYSa~4=y~qZ|t?RIv6">
          <field name="VAR" id="{.n;O~gc/tvR;8@4T-vp">max</field>
        </block>
      </value>
    </block>
  </value>
</block>
<block type="controls_repeat_ext" id="#IEY3n=SN.NWjsIEeVac" disabled="true" x="413" y="238">
  <value name="TIMES">
    <shadow type="math_number" id="RnAbuDu#ER[+p)!N)Stz">
      <field name="NUM">10</field>
    </shadow>
    <block type="variables_get" id="o@parq)LxlXZ%F2PbJ0l">
      <field name="VAR" id="|cH300xOF|DgeP$?+ga-">x</field>
    </block>
  </value>
</block>
<block type="text" id="NnOblZEvmbkTZuS;e=D2" x="63" y="263">
  <field name="TEXT">Title: Alternate</field>
</block>
<block type="text_print" id="w/w~=NuPjBZXi94woGz;" x="12" y="312">
  <value name="TEXT">
    <shadow type="text" id="GSS?QyXBGXWs9vi)9i{_">
      <field name="TEXT">Number is odd.</field>
    </shadow>
  </value>
</block>
<block type="variables_set" id="TAU[T(-Lv9OjfbiPa_3/" x="363" y="337">
  <field name="VAR" id="{.n;O~gc/tvR;8@4T-vp">max</field>
  <value name="VALUE">
    <block type="variables_get" id="{O)e_ey2_h;g6f1MC(:9">
      <field name="VAR" id="4oTv|8O2h7FpX1?{XIYq">num</field>
    </block>
  </value>
</block>
<block type="controls_if" id="j1K6oz{G1O3VCN%IlP-e" x="37" y="362">
  <mutation else="1"></mutation>
  <value name="IF0">
    <block type="math_number_property" id=":eB6ZT;|l/MCI#QI}L6q">
      <mutation divisor_input="false"></mutation>
      <field name="PROPERTY">EVEN</field>
      <value name="NUMBER_TO_CHECK">
        <shadow type="math_number" id="a@v~A=2KdXrb8ojhFCU~">
          <field name="NUM">0</field>
        </shadow>
        <block type="variables_get" id="ccon(S@2sn=mh^$W-pfH">
          <field name="VAR" id="4oTv|8O2h7FpX1?{XIYq">num</field>
        </block>
      </value>
    </block>
  </value>
</block>
<block type="text" id="^Z*vE+iAK=-pWQVe[u#1" x="362" y="438">
  <field name="TEXT">Title: Infinite loop</field>
</block>
<block type="controls_whileUntil" id="Ko@$pMcku-+F31~WjzB-" x="362" y="488">
  <field name="MODE">WHILE</field>
  <value name="BOOL">
    <block type="logic_boolean" id="RNL8F$6$~W}eh-Gb!Oyw">
      <field name="BOOL">TRUE</field>
    </block>
  </value>
</block>
<block type="text_print" id="J@2Vr(qXcNYkz^6Wk~xf" x="12" y="513">
  <value name="TEXT">
    <shadow type="text" id="0-i(=,+=DCCxr4at?w|2">
      <field name="TEXT">Number is even</field>
    </shadow>
  </value>
</block>
</xml>`;

export default blocklibrary;

// BEFORE XML
/** -<xml xmlns="https://developers.google.com/blockly/xml">\n
   <variables>\n
     <variable id="i+cv@i0wH7A$d@Vqj[ -(">num</variable>\n
     <variable id="G@2k.ZgG#d,s$Y;C)P4+">max</variable>\n
   </variables>\n
   <block editable="false" deletable="false" type="variables_set" id="dyS|,Vq3@_1h -7A$aCR8" x="0" y="10">\n
     <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>\n
     <value name="VALUE">\n
       <block movable="false" editable="false" deletable="false" type="math_number" id="BMf_Jgf -*:$#H[##eJ*q">\n
         <field name="NUM">8</field>\n
       </block>\n
     </value>\n
   </block>\n
   <block editable="false" deletable="false" type="text_print" id="xC:IdvTx]}6Ra9$%{]6S" x="0" y="50">\n
     <value name="TEXT">\n
       <shadow editable="false" type="text" id="bb#(V3kaEbYm1cANjvts">\n
         <field name="TEXT">It's the current max.</field>\n
       </shadow>\n
     </value>\n
   </block>\n
   <block editable="false" deletable="false" type="variables_set" id="f^wy=qn[R^(rVQ1Ta48b" x="0" y="100">\n
     <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>\n
     <value name="VALUE">\n
       <block movable="false" editable="false" deletable="false" type="math_number" id="Qp_3EGD7@*Tz(86wqB8d">\n
         <field name="NUM">5</field>\n
       </block>\n
     </value>\n
   </block>\n
   <block editable="false" deletable="false" type="controls_whileUntil" id=" -5ZE1v2)qEOg3wTL[N0$" x="0" y="150">\n
     <field name="MODE">WHILE</field>\n
     <value name="BOOL">\n
       <block movable="false" editable="false" deletable="false" type="logic_boolean" id="(+^qMqG0lW]QH5$,KY.r">\n
         <field name="BOOL">TRUE</field>\n
       </block>\n
     </value>\n
   </block>\n
   <block editable="false" deletable="false" type="variables_set" id="1kI=G5FAZ~:K5_%y@uV)" x="0" y="200">\n
     <field name="VAR" id="G@2k.ZgG#d,s$Y;C)P4+">max</field>\n
     <value name="VALUE">\n
       <block movable="false" editable="false" deletable="false" type="variables_get" id="E*:AyPd4CA~22.?2O!b~">\n
         <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>\n
       </block>\n
     </value>\n
   </block>\n
   <block editable="false" deletable="false" type="controls_if" id="oTi;6?FDOgEVyUzmr|l0" x="0" y="300">\n
     <mutation else="1"></mutation>\n
     <value name="IF0">\n
       <block movable="false" editable="false" deletable="false" type="math_number_property" id="rK;qtY8R0T!%WRog}@V]">\n
         <mutation divisor_input="false"></mutation>\n
         <field name="PROPERTY">EVEN</field>\n
         <value name="NUMBER_TO_CHECK">\n
           <shadow editable="false" type="math_number" id="GUA -L~.wufO28SIO_D5?">\n
             <field name="NUM">0</field>\n
           </shadow>\n
           <block movable="false" editable="false" deletable="false" type="variables_get" id="jK;*UK+US:u1;BcUq}{?">\n
             <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>\n
           </block>\n
         </value>\n
       </block>\n
     </value>\n
   </block>\n
   <block editable="false" deletable="false" type="text_print" id="15Lq@%26#+~K+dQv:Ioq" x="0" y="350">\n
     <value name="TEXT">\n
       <shadow editable="false" type="text" id="G8hBaKvLt!W(.DUsZo#(">\n
         <field name="TEXT">Number is Odd.</field>\n
       </shadow>\n
     </value>\n
   </block>\n
   <block editable="false" deletable="false" type="controls_if" id="m6=h7Y$]L-PvfpUe,[IR" x="0" y="400">\n
     <value name="IF0">\n
       <block movable="false" editable="false" deletable="false" type="logic_compare" id="],Pvl+VNZW0K?a]ZLT8Q">\n
         <field name="OP">GT</field>\n
         <value name="A">\n
           <block movable="false" editable="false" deletable="false" type="variables_get" id="L+mY]Wq0:CvUDaI+N2s@">\n
             <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>\n
           </block>\n
         </value>\n
         <value name="B">\n
           <block movable="false" editable="false" deletable="false" type="variables_get" id="om-e@ZDVx6n}rRRTnjOF">\n
             <field name="VAR" id="G@2k.ZgG#d,s$Y;C)P4+">max</field>\n
           </block>\n
         </value>\n
       </block>\n
     </value>\n
   </block>\n
   <block editable="false" deletable="false" type="text_print" id="D|j+dB#A9;!8WJ5W0lt2" x="0" y="450">\n
     <value name="TEXT">\n
       <shadow editable="false" type="text" id="Kr$(Lk$(;7S}9e2J9{Yt">\n
         <field name="TEXT">Number is even.</field>\n
       </shadow>\n
     </value>\n
   </block>\n
 </xml>
 -;

export default blocklibrary;

/** Correct Version
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="i+cv@i0wH7A$d@Vqj[ -(">num</variable>
    <variable id="G@2k.ZgG#d,s$Y;C)P4+">max</variable>
  </variables>
  <block editable="false" deletable="false" type="variables_set" id="f^wy=qn[R^(rVQ1Ta48b" x="-263" y="-137">
    <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>
    <value name="VALUE">
      <block editable="false" deletable="false" type="math_number" id="Qp_3EGD7@*Tz(86wqB8d">
        <field name="NUM">5</field>
      </block>
    </value>
    <next>
      <block editable="false" deletable="false" type="controls_whileUntil" id=" -5ZE1v2)qEOg3wTL[N0$">
        <field name="MODE">WHILE</field>
        <value name="BOOL">
          <block editable="false" deletable="false" type="logic_boolean" id="(+^qMqG0lW]QH5$,KY.r">
            <field name="BOOL">TRUE</field>
          </block>
        </value>
        <statement name="DO">
          <block editable="false" deletable="false" type="controls_if" id="m6=h7Y$]L-PvfpUe,[IR">
            <value name="IF0">
              <block editable="false" deletable="false" type="logic_compare" id="],Pvl+VNZW0K?a]ZLT8Q">
                <field name="OP">GT</field>
                <value name="A">
                  <block editable="false" deletable="false" type="variables_get" id="L+mY]Wq0:CvUDaI+N2s@">
                    <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>
                  </block>
                </value>
                <value name="B">
                  <block editable="false" deletable="false" type="variables_get" id="om-e@ZDVx6n}rRRTnjOF">
                    <field name="VAR" id="G@2k.ZgG#d,s$Y;C)P4+">max</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block editable="false" deletable="false" type="variables_set" id="1kI=G5FAZ~:K5_%y@uV)">
                <field name="VAR" id="G@2k.ZgG#d,s$Y;C)P4+">max</field>
                <value name="VALUE">
                  <block editable="false" deletable="false" type="variables_get" id="E*:AyPd4CA~22.?2O!b~">
                    <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>
                  </block>
                </value>
                <next>
                  <block editable="false" deletable="false" type="text_print" id="xC:IdvTx]}6Ra9$%{]6S">
                    <value name="TEXT">
                      <shadow editable="false" type="text" id="bb#(V3kaEbYm1cANjvts">
                        <field name="TEXT">It s the current max.</field>
                      </shadow>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block editable="false" deletable="false" type="controls_if" id="oTi;6?FDOgEVyUzmr|l0">
                <mutation else="1"></mutation>
                <value name="IF0">
                  <block editable="false" deletable="false" type="math_number_property" id="rK;qtY8R0T!%WRog}@V]">
                    <mutation divisor_input="false"></mutation>
                    <field name="PROPERTY">EVEN</field>
                    <value name="NUMBER_TO_CHECK">
                      <shadow editable="false" type="math_number" id="GUA -L~.wufO28SIO_D5?">
                        <field name="NUM">0</field>
                      </shadow>
                      <block editable="false" deletable="false" type="variables_get" id="jK;*UK+US:u1;BcUq}{?">
                        <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block editable="false" deletable="false" type="text_print" id="D|j+dB#A9;!8WJ5W0lt2">
                    <value name="TEXT">
                      <shadow editable="false" type="text" id="Kr$(Lk$(;7S}9e2J9{Yt">
                        <field name="TEXT">Number is even.</field>
                      </shadow>
                    </value>
                  </block>
                </statement>
                <statement name="ELSE">
                  <block editable="false" deletable="false" type="text_print" id="15Lq@%26#+~K+dQv:Ioq">
                    <value name="TEXT">
                      <shadow editable="false" type="text" id="G8hBaKvLt!W(.DUsZo#(">
                        <field name="TEXT">Number is Odd.</field>
                      </shadow>
                    </value>
                  </block>
                </statement>
                <next>
                  <block editable="false" deletable="false" type="variables_set" id="dyS|,Vq3@_1h -7A$aCR8">
                    <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>
                    <value name="VALUE">
                      <block editable="false" deletable="false" type="math_number" id="BMf_Jgf -*:$#H[##eJ*q">
                        <field name="NUM">8</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </next>
  </block>
</xml>

 <xml xmlns="https://developers.google.com/blockly/xml">\n
   <variables>\n
     <variable id="i+cv@i0wH7A$d@Vqj[ -(">num</variable>\n
     <variable id="G@2k.ZgG#d,s$Y;C)P4+">max</variable>\n
   </variables>\n
   <block editable="false" deletable="false" type="variables_set" id="f^wy=qn[R^(rVQ1Ta48b" x="237" y="62">\n
     <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>\n
     <value name="VALUE">\n
       <block editable="false" deletable="false" type="math_number" id="Qp_3EGD7@*Tz(86wqB8d">\n
         <field name="NUM">5</field>\n
       </block>\n
     </value>\n
     <next>\n
       <block editable="false" deletable="false" type="variables_set" id="1kI=G5FAZ~:K5_%y@uV)">\n
         <field name="VAR" id="G@2k.ZgG#d,s$Y;C)P4+">max</field>\n
         <value name="VALUE">\n
           <block editable="false" deletable="false" type="variables_get" id="E*:AyPd4CA~22.?2O!b~">\n
             <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>\n
           </block>\n
         </value>\n
         <next>\n
           <block editable="false" deletable="false" type="controls_whileUntil" id=" -5ZE1v2)qEOg3wTL[N0$">\n
             <field name="MODE">WHILE</field>\n
             <value name="BOOL">\n
               <block editable="false" deletable="false" type="logic_boolean" id="(+^qMqG0lW]QH5$,KY.r">\n
                 <field name="BOOL">TRUE</field>\n
               </block>\n
             </value>\n
             <statement name="DO">\n
               <block editable="false" deletable="false" type="controls_if" id="m6=h7Y$]L-PvfpUe,[IR">\n
                 <value name="IF0">\n
                   <block editable="false" deletable="false" type="logic_compare" id="],Pvl+VNZW0K?a]ZLT8Q">\n
                     <field name="OP">GT</field>\n
                     <value name="A">\n
                       <block editable="false" deletable="false" type="variables_get" id="L+mY]Wq0:CvUDaI+N2s@">\n
                         <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>\n
                       </block>\n
                     </value>\n
                     <value name="B">\n
                       <block editable="false" deletable="false" type="variables_get" id="om-e@ZDVx6n}rRRTnjOF">\n
                         <field name="VAR" id="G@2k.ZgG#d,s$Y;C)P4+">max</field>\n
                       </block>\n
                     </value>\n
                   </block>\n
                 </value>\n
                 <statement name="DO0">\n
                   <block editable="false" deletable="false" type="text_print" id="xC:IdvTx]}6Ra9$%{]6S">\n
                     <value name="TEXT">\n
                       <shadow editable="false" type="text" id="bb#(V3kaEbYm1cANjvts">\n
                         <field name="TEXT">It s the current max.</field>\n
                       </shadow>\n
                     </value>\n
                   </block>\n
                 </statement>\n
                 <next>\n
                   <block editable="false" deletable="false" type="controls_if" id="oTi;6?FDOgEVyUzmr|l0">\n
                     <mutation else="1"></mutation>\n
                     <value name="IF0">\n
                       <block editable="false" deletable="false" type="math_number_property" id="rK;qtY8R0T!%WRog}@V]">\n
                         <mutation divisor_input="false"></mutation>\n
                         <field name="PROPERTY">EVEN</field>\n
                         <value name="NUMBER_TO_CHECK">\n
                           <shadow editable="false" type="math_number" id="GUA -L~.wufO28SIO_D5?">\n
                             <field name="NUM">0</field>\n
                           </shadow>\n
                           <block editable="false" deletable="false" type="variables_get" id="jK;*UK+US:u1;BcUq}{?">\n
                             <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>\n
                           </block>\n
                         </value>\n
                       </block>\n
                     </value>\n
                     <statement name="DO0">\n
                       <block editable="false" deletable="false" type="text_print" id="D|j+dB#A9;!8WJ5W0lt2">\n
                         <value name="TEXT">\n
                           <shadow editable="false" type="text" id="Kr$(Lk$(;7S}9e2J9{Yt">\n
                             <field name="TEXT">Number is even.</field>\n
                           </shadow>\n
                         </value>\n
                       </block>\n
                     </statement>\n
                     <statement name="ELSE">\n
                       <block editable="false" deletable="false" type="text_print" id="15Lq@%26#+~K+dQv:Ioq">\n
                         <value name="TEXT">\n
                           <shadow editable="false" type="text" id="G8hBaKvLt!W(.DUsZo#(">\n
                             <field name="TEXT">Number is Odd.</field>\n
                           </shadow>\n
                         </value>\n
                       </block>\n
                     </statement>\n
                     <next>\n
                       <block editable="false" deletable="false" type="variables_set" id="dyS|,Vq3@_1h -7A$aCR8">\n
                         <field name="VAR" id="i+cv@i0wH7A$d@Vqj[ -(">num</field>\n
                         <value name="VALUE">\n
                           <block editable="false" deletable="false" type="math_number" id="BMf_Jgf -*:$#H[##eJ*q">\n
                             <field name="NUM">8</field>\n
                           </block>\n
                         </value>\n
                       </block>\n
                     </next>\n
                   </block>\n
                 </next>\n
               </block>\n
             </statement>\n
           </block>\n
         </next>\n
       </block>\n
     </next>\n
   </block>\n
 </xml> ;
*/
