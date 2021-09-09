let clickOnItem= document.getElementById('clickOnItem');
let allTasks =document.getElementById('allTasks');
let clickOnItem1= document.getElementById('clickOnItem1');
let clickOnItem2= document.getElementById('clickOnItem2');
let clickOnItem3= document.getElementById('clickOnItem3');
let clickOnItem4= document.getElementById('clickOnItem4');
let clickOnItem5= document.getElementById('clickOnItem5');


let showTasks =()=>{

    allTasks.innerHTML=`
    <button type="button" class="collapsible">What is a novel coronavirus?</button>
<div class="content">
  <p>On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”.

  A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.</p>
</div>
<button type="button" class="collapsible">Why is the disease being called coronavirus disease 2019 COVID-19?</button>
<div class="content">
  <p>On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”.

  There are many types of human coronaviruses including some that commonly cause mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused be a novel (or new) coronavirus that has not previously been seen in humans. The name of this disease was selected following the World Health Organization (WHO) best practiceexternal icon for naming of new human infectious diseases.
  
  </p>
</div>
<button type="button" class="collapsible">How can people help stop stigma related to COVID-19?</button>
<div class="content">
  <p>People can fight stigma and help, not hurt, others by providing social support. Counter stigma by learning and sharing facts. Communicating the facts that viruses do not target specific racial or ethnic groups and how COVID-19 actually spreads can help stop stigma.</p>
</div>

   `

   let coll = document.getElementsByClassName("collapsible");
   let i;

   for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

}


clickOnItem.addEventListener('click',showTasks);


let showTasks1 =()=>{

    allTasks.innerHTML=`
    <button type="button" class="collapsible">What can I do to protect myself and prevent the spread of disease?</button>
<div class="content">
  <p>Protection measures for everyone

  Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Many countries around the world have seen cases of COVID-19 and several have seen outbreaks. Authorities in China and some other countries have succeeded in slowing or stopping their outbreaks. However, the situation is unpredictable so check regularly for the latest news.
  
  You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:
  
  Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.
  
  Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.
  
   
  Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
  
  Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.
  
   
  Avoid touching eyes, nose and mouth.
  
  Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.
  
   
  Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.
  
  Why? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.
  
   
  Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.
  
  Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.
  
   
  Keep up to date on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading widely). If possible, avoid traveling to places – especially if you are an older person or have diabetes, heart or lung disease.
  
  Why? You have a higher chance of catching COVID-19 in one of these areas.
  
  What should I do if I had close contact with someone who has COVID-19?
  
  Household members, intimate partners, and caregivers in a nonhealthcare setting may have close contact2 with a person with symptomatic, laboratory-confirmed COVID-19 or a person under investigation. Close contacts should monitor their health; they should call their healthcare provider right away if they develop symptoms suggestive of COVID-19 (e.g., fever, cough, shortness of breath)
  
  Close contacts should also follow these recommendations:
  
  Make sure that you understand and can help the patient follow their healthcare provider’s instructions for medication(s) and care. You should help the patient with basic needs in the home and provide support for getting groceries, prescriptions, and other personal needs.
  
   
  Monitor the patient’s symptoms. If the patient is getting sicker, call his or her healthcare provider and tell them that the patient has laboratory-confirmed COVID-19. This will help the healthcare provider’s office take steps to keep other people in the office or waiting room from getting infected. Ask the healthcare provider to call the local or state health department for additional guidance. If the patient has a medical emergency and you need to call 911, notify the dispatch personnel that the patient has, or is being evaluated for COVID-19.
  
   
  Household members should stay in another room or be separated from the patient as much as possible. Household members should use a separate bedroom and bathroom, if available.
  
   
  Prohibit visitors who do not have an essential need to be in the home.
  
   
  Household members should care for any pets in the home. Do not handle pets or other animals while sick. For more information, see COVID-19 and Animals.
  
   
  Make sure that shared spaces in the home have good air flow, such as by an air conditioner or an opened window, weather permitting.
  
   
  Perform hand hygiene frequently. Wash your hands often with soap and water for at least 20 seconds or use an alcohol-based hand sanitizer that contains 60 to 95% alcohol, covering all surfaces of your hands and rubbing them together until they feel dry. Soap and water should be used preferentially if hands are visibly dirty.
  
   
  Avoid touching your eyes, nose, and mouth with unwashed hands.
  
   
  The patient should wear a facemask when you are around other people. If the patient is not able to wear a facemask (for example, because it causes trouble breathing), you, as the caregiver, should wear a mask when you are in the same room as the patient.
  
   
  Wear a disposable facemask and gloves when you touch or have contact with the patient’s blood, stool, or body fluids, such as saliva, sputum, nasal mucus, vomit, urine.
  
  Throw out disposable facemasks and gloves after using them. Do not reuse.
  
   
  When removing personal protective equipment, first remove and dispose of gloves. Then, immediately clean your hands with soap and water or alcohol-based hand sanitizer. Next, remove and dispose of facemask, and immediately clean your hands again with soap and water or alcohol-based hand sanitizer.
  
   
  Avoid sharing household items with the patient. You should not share dishes, drinking glasses, cups, eating utensils, towels, bedding, or other items. After the patient uses these items, you should wash them thoroughly (see below “Wash laundry thoroughly”).
  
   
  Clean all “high-touch” surfaces, such as counters, tabletops, doorknobs, bathroom fixtures, toilets, phones, keyboards, tablets, and bedside tables, every day. Also, clean any surfaces that may have blood, stool, or body fluids on them.
  
  Use a household cleaning spray or wipe, according to the label instructions. Labels contain instructions for safe and effective use of the cleaning product including precautions you should take when applying the product, such as wearing gloves and making sure you have good ventilation during use of the product.
  
   
  Wash laundry thoroughly.
  
  Immediately remove and wash clothes or bedding that have blood, stool, or body fluids on them.
  
   
  Wear disposable gloves while handling soiled items and keep soiled items away from your body. Clean your hands (with soap and water or an alcohol-based hand sanitizer) immediately after removing your gloves.
  
   
  Read and follow directions on labels of laundry or clothing items and detergent. In general, using a normal laundry detergent according to washing machine instructions and dry thoroughly using the warmest temperatures recommended on the clothing label.
  
   
  Place all used disposable gloves, facemasks, and other contaminated items in a lined container before disposing of them with other household waste. Clean your hands (with soap and water or an alcohol-based hand sanitizer) immediately after handling these items. Soap and water should be used preferentially if hands are visibly dirty.
  
   
  Discuss any additional questions with your state or local health department or healthcare provider. Check available hours when contacting your local health department.</p>
</div>
<button type="button" class="collapsible">Who is at higher risk for serious illness from COVID-19?</button>
<div class="content">
  <p>Older adults and people of any age who have serious underlying medical conditions may be at higher risk for more serious complications from COVID-19. These people who may be at higher risk of getting very sick from this illness, includes:

  Older adults
  
  People who have serious underlying medical conditions like:
  
  Heart disease
  
  Diabetes
  
  Lung disease</p>
</div>
   `

   let coll1 = document.getElementsByClassName("collapsible");
   let i;

   for (i = 0; i < coll1.length; i++) {
    coll1[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content1 = this.nextElementSibling;
      if (content1.style.display === "block") {
        content1.style.display = "none";
      } else {
        content1.style.display = "block";
      }
    });
  }

}


clickOnItem1.addEventListener('click',showTasks1);
let showTasks2 =()=>{

    allTasks.innerHTML=`
    <button type="button" class="collapsible">What should people at higher risk of serious illness with COVID-19 do?</button>
<div class="content">
  <p>
  If you are at higher risk of getting very sick from COVID-19, you should: stock up on supplies; take everyday precautions to keep space between yourself and others; when you go out in public, keep away from others who are sick; limit close contact and wash your hands often; and avoid crowds, cruise travel, and non-essential travel. If there is an outbreak in your community, stay home as much as possible. Watch for symptoms and emergency signs. If you get sick, stay home and call your doctor. More information on how to prepare, what to do if you get sick, and how communities and caregivers can support those at higher risk is available on People at Risk for Serious Illness from COVID-19.

  </p>
</div>
   `

   let coll1 = document.getElementsByClassName("collapsible");
   let i;

   for (i = 0; i < coll1.length; i++) {
    coll1[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content1 = this.nextElementSibling;
      if (content1.style.display === "block") {
        content1.style.display = "none";
      } else {
        content1.style.display = "block";
      }
    });
  }

}


clickOnItem2.addEventListener('click',showTasks2);
let showTasks3 =()=>{

    allTasks.innerHTML=`
    <button type="button" class="collapsible">What should people at higher risk of serious illness with COVID-19 do?</button>
<div class="content">
  <p>
  If you are at higher risk of getting very sick from COVID-19, you should: stock up on supplies; take everyday precautions to keep space between yourself and others; when you go out in public, keep away from others who are sick; limit close contact and wash your hands often; and avoid crowds, cruise travel, and non-essential travel. If there is an outbreak in your community, stay home as much as possible. Watch for symptoms and emergency signs. If you get sick, stay home and call your doctor. More information on how to prepare, what to do if you get sick, and how communities and caregivers can support those at higher risk is available on People at Risk for Serious Illness from COVID-19.

  </p>
</div>

<button type="button" class="collapsible">What should people at higher risk of serious illness with COVID-19 do?</button>
<div class="content">
  <p>
  If you are at higher risk of getting very sick from COVID-19, you should: stock up on supplies; take everyday precautions to keep space between yourself and others; when you go out in public, keep away from others who are sick; limit close contact and wash your hands often; and avoid crowds, cruise travel, and non-essential travel. If there is an outbreak in your community, stay home as much as possible. Watch for symptoms and emergency signs. If you get sick, stay home and call your doctor. More information on how to prepare, what to do if you get sick, and how communities and caregivers can support those at higher risk is available on People at Risk for Serious Illness from COVID-19.

  </p>
</div>
   `

   let coll1 = document.getElementsByClassName("collapsible");
   let i;

   for (i = 0; i < coll1.length; i++) {
    coll1[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content1 = this.nextElementSibling;
      if (content1.style.display === "block") {
        content1.style.display = "none";
      } else {
        content1.style.display = "block";
      }
    });
  }

}


clickOnItem3.addEventListener('click',showTasks3);


let showTasks4 =()=>{

    allTasks.innerHTML=`
    <button type="button" class="collapsible">What should people at higher risk of serious illness with COVID-19 do?</button>
<div class="content">
  <p>
  If you are at higher risk of getting very sick from COVID-19, you should: stock up on supplies; take everyday precautions to keep space between yourself and others; when you go out in public, keep away from others who are sick; limit close contact and wash your hands often; and avoid crowds, cruise travel, and non-essential travel. If there is an outbreak in your community, stay home as much as possible. Watch for symptoms and emergency signs. If you get sick, stay home and call your doctor. More information on how to prepare, what to do if you get sick, and how communities and caregivers can support those at higher risk is available on People at Risk for Serious Illness from COVID-19.

  </p>
</div>

<button type="button" class="collapsible">Should I wear a mask to protect myself?</button>
<div class="content">
  <p>
  Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or looking after someone who may have COVID-19. Disposable face mask can only be used once. If you are not ill or looking after someone who is ill then you are wasting a mask. There is a world-wide shortage of masks, so WHO urges people to use masks wisely.

  WHO advises rational use of medical masks to avoid unnecessary wastage of precious resources and mis-use of masks ( Advice on the use of masks).
  
  The most effective ways to protect yourself and others against COVID-19 are to frequently clean your hands, cover your cough with the bend of elbow or tissue and maintain a distance of at least 1 meter (3 feet) from people who are coughing or sneezing. See basic protective measures against the new coronavirus for more information.

  </p>
</div>
   `

   let coll1 = document.getElementsByClassName("collapsible");
   let i;

   for (i = 0; i < coll1.length; i++) {
    coll1[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content1 = this.nextElementSibling;
      if (content1.style.display === "block") {
        content1.style.display = "none";
      } else {
        content1.style.display = "block";
      }
    });
  }

}


clickOnItem4.addEventListener('click',showTasks4);

let showTasks5 =()=>{

    allTasks.innerHTML=`
    <button type="button" class="collapsible">COVID-19 virus can be transmitted in areas with hot and humid climates?</button>
<div class="content">
  <p>
  From the evidence so far, the COVID-19 virus can be transmitted in ALL AREAS, including areas with hot and humid weather. Regardless of climate, adopt protective measures if you live in, or travel to an area reporting COVID-19. The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.

  </p>
</div>

<button type="button" class="collapsible">Cold weather and snow CANNOT kill the new coronavirus</button>
<div class="content">
  <p>
  There is no reason to believe that cold weather can kill the new coronavirus or other diseases. The normal human body temperature remains around 36.5°C to 37°C, regardless of the external temperature or weather. The most effective way to protect yourself against the new coronavirus is by frequently cleaning your hands with alcohol-based hand rub or washing them with soap and water.

  </p>
</div>
   `

   let coll1 = document.getElementsByClassName("collapsible");
   let i;

   for (i = 0; i < coll1.length; i++) {
    coll1[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content1 = this.nextElementSibling;
      if (content1.style.display === "block") {
        content1.style.display = "none";
      } else {
        content1.style.display = "block";
      }
    });
  }

}


clickOnItem5.addEventListener('click',showTasks5);